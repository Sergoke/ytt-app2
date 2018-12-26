import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../shared/services/api/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  embedUrl: string;
  private player;
  private interval;
  private subtitles: {(key: string): Array<Array<string>>};
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
    this.route.params.subscribe( params => {
      this.embedUrl = 'https://www.youtube.com/embed/' + params.id + '?enablejsapi=1';
      this.db.getSubtitles(params.id).subscribe( subts => {
        console.log(subts);
        this.subtitles = subts['subts'];
        this.timeKeysArray = subts['timeKeys'];
        this.createTimeKeys(subts['timeKeys']);
        console.log(this.timeKeys)
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
    console.log(keys);
    this.timeKeys = {};
    keys.forEach(function(key, index, arr){
      for(var i = key; i !== keys.length - 1 && i < keys[index + 1]; i += .1){
        i = Math.round(10 * i) / 10;
        this.timeKeys[i] = index;
      }
    }, this);
  }

  stopOrStartPlayer(stop: boolean = true){
    if(stop) return this.player.pauseVideo();
    this.player.playVideo();
  }

  scrollSubts(down: boolean){
    console.log('yes, scroll', down);

    var step = down? 1 : -1;

    var time = Math.round(10 * this.player.getCurrentTime()) / 10;
    if(this.timeKeys.hasOwnProperty(time)){
      let seekVal = this.timeKeysArray[this.timeKeys[time] + step];
      this.player.seekTo(seekVal);
      this.changeDetector.detectChanges();
    }
  }

}
