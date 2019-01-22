import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../shared/services/api/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('wrapper') videoWrapper;
  @ViewChild('block', {read: ElementRef}) video: ElementRef;

  public embedUrl: string;
  private player;
  private interval;
  public subtitles: any;//{(key: string): Array<Array<string>>};
  private timeKeys: {};
  private timeKeysArray;
  public subtOffset;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private db: ApiService
  ) { }

  ngOnInit() {
    this.setRatio();
    this.route.params.subscribe( params => {
      this.embedUrl = 'https://www.youtube.com/embed/' + params.id + '?enablejsapi=1';
      this.db.getSubtitles(params.id).subscribe( subts => {
        this.subtitles = subts['subts'];
        this.timeKeysArray = subts['timeKeys'];
        this.createTimeKeys(subts['timeKeys']);
        this.subtOffset = 0;
      },
      error => {
        this.router.navigate(['/unauthorized']);
      });
    });

    this.initPlayer();
  }

  ngOnDestroy(){
    this.interval && clearInterval(this.interval);
    this.interval = null;
  }

  initPlayer() {
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
          var tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api",
          tag.id = "iframe_api";
          var firstScriptTag = document.getElementsByTagName("script")[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
      "onYouTubeIframeAPIReady" in window ? this.createPlayer() : window['onYouTubeIframeAPIReady'] = function(e) {
          this.createPlayer();
      }.bind(this);
  }

  createPlayer() {
    this.player = new window['YT'].Player("player", {
      events: {
          onStateChange: this.onStateChangeHandler.bind(this),
          onError: function(t) {
              console.log("yt error: ");
              console.dir(t);
          }
      }
    });

    window['player'] = this.player;
  }

  onStateChangeHandler(e) {
    if(e.data == window['YT'].PlayerState.PLAYING){
      if(this.interval) return;
      this.interval = setInterval( () => {
        var time = Math.round(10 * this.player.getCurrentTime()) / 10;
        if(this.timeKeys.hasOwnProperty(time)){
          this.subtOffset = this.timeKeys[time] * 50;
          this.changeDetector.detectChanges();
        }
      }, 100);
    }
  }

  createTimeKeys(keys: [number]){
    this.timeKeys = {};
    keys.forEach(function(key, index){
      for(var i = key; i < keys[index + 1]; i = Math.round((i + .1) * 10) / 10){
        this.timeKeys[i] = index;
      }
    }, this);

    var lastKey = keys[keys.length - 1];
    for(var i = lastKey; i < lastKey + 2; i = Math.round((i + .1) * 10) / 10){
      this.timeKeys[i] = keys.length - 1;
    }
  }

  scrollSubts(down: boolean){
    var step = down? 1 : -1;

    var time = Math.round(10 * this.player.getCurrentTime()) / 10;
    var seekVal;
    if(this.timeKeysArray[this.timeKeys[time] + step]){
      seekVal = this.timeKeysArray[this.timeKeys[time] + step];
    }
    else {
      seekVal = this.timeKeysArray[0];
    }
      this.player.seekTo(seekVal);
      this.changeDetector.detectChanges();
  }

  onResize(){
    this.setRatio();
  }

  blockStyles: {} = {};
  isResizeIntervalWorking = false;

  private setRatio(){

    this.blockStyles = {
      width: 'auto'
    }
      
    if(!this.isResizeIntervalWorking){
      this.isResizeIntervalWorking = true;
      
      var interval = setInterval(() => {
        var blockRect = this.video.nativeElement.getBoundingClientRect();
        var wrapperRect = this.videoWrapper.nativeElement.getBoundingClientRect();

        if(blockRect.height >= wrapperRect.height){
          this.blockStyles = {
            width: wrapperRect.height * (blockRect.width / blockRect.height) + 'px'
          }
        }
        else {
          this.blockStyles = {
            width: 'auto'
          }
        }
      }, 0);

      setTimeout(() => {
        clearInterval(interval);
        this.isResizeIntervalWorking = false;
      }, 2000);

    }

  }

}
