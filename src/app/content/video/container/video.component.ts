import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
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
  private subtitles: Array<Array<string>>;
  private timeKeys: {};
  public subtOffset;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private db: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.embedUrl = 'https://www.youtube.com/embed/' + params.id + '?enablejsapi=1';
      this.db.getSubtitles(params.id).subscribe( subts => {
        console.log(subts);
        this.subtitles = subts['subts'];
        this.createTimeKeys(subts['timeKeys']);
        console.log(this.timeKeys)
        this.subtOffset = 0;
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
    console.log(e.data);
    if(e.data == window['YT'].PlayerState.PLAYING){
      this.interval = setInterval( () => {
        console.log(this);
        var time = Math.round(10 * this.player.getCurrentTime()) / 10;
        if(this.timeKeys.hasOwnProperty(time)){
          this.subtOffset = this.timeKeys[time] * 50;
          this.changeDetector.detectChanges();
          console.log('subtOffset: ' + this.subtOffset);
        }
      }, 100);
    }

    else {
      this.interval && clearInterval(this.interval);
      this.interval = null;
    }
  }

  createTimeKeys(timeKeys: [number]){
    this.timeKeys = {};
    timeKeys.forEach(function(key, index, arr){
      for(var i = key; i !== timeKeys.length - 1 && i < timeKeys[index + 1]; i += .1){
        i = Math.round(10 * i) / 10;
        this.timeKeys[i] = index;
      }
    }, this);
  }

  stopPlayer(){
    this.player.pauseVideo();
  }

}
