import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/services/api/api.service';
import { DomSanitizer } from "@angular/platform-browser";
import { Video } from "../../shared/models";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  private videoId: string;
  private video: Video;
  private player;
  private interval;
  private curRowIdx = 0;
  private roles = environment.roleCodes;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private db: ApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.videoId = this.route.snapshot.params.id;
    this.db.getVideo(this.videoId).subscribe(
      (video: Video) => this.video = video,
      () => this.router.navigate(['/unauthorized'])
    );
    this.initPlayer();
  }

  ngOnDestroy() {
    this.interval && clearInterval(this.interval);
    this.interval = null;
  }

  initPlayer() {
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.id = "iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    "onYouTubeIframeAPIReady" in window ? this.createPlayer() : window['onYouTubeIframeAPIReady'] = () => {
      this.createPlayer();
    };
  }

  createPlayer() {
    this.player = new window['YT'].Player("player", {
      events: {
        onStateChange: this.onStateChangeHandler.bind(this),
        onError: function (t) {
          console.error("yt error: ", t);
        }
      }
    });
    window['player'] = this.player;
  }

  onStateChangeHandler(e) {
    if (!this.interval && e.data == window['YT'].PlayerState.PLAYING) {
      this.interval = setInterval(() => {
        const curVideoTime = Math.round(10 * this.player.getCurrentTime()) / 10;
        let newCurRowIdx = this.video.timeKeys.findIndex(timeKey => timeKey > curVideoTime) - 1;
        if (newCurRowIdx < 0 && curVideoTime < this.video.timeKeys[0]) {
          newCurRowIdx = 0;
        } else if (newCurRowIdx < 0 && curVideoTime > this.video.timeKeys[this.video.timeKeys.length - 1]) {
          // newCurRowIdx = this.video.video.length;
        }
        if (this.curRowIdx !== newCurRowIdx) {
          this.curRowIdx = newCurRowIdx;
          this.changeDetector.detectChanges();
        }
      }, 100);
    }
  }

  scrollSubts(down: boolean) {
    const step = down ? 1 : -1;
    const time = Math.round(10 * this.player.getCurrentTime()) / 10;
    let seekVal;
    if (this.video.timeKeys[this.video.timeKeys[time] + step]) {
      seekVal = this.video.timeKeys[this.video.timeKeys[time] + step];
    } else {
      seekVal = this.video.timeKeys[0];
    }
    this.player.seekTo(seekVal);
    this.changeDetector.detectChanges();
  }

  get videoMaxWidth() {
    if (!this.video || !this.video.subts) {
      return;
    }
    const subtsCount = Object.keys(this.video.subts).length;
    const subtsBlockHeight = 52 * subtsCount;
    const unsafeStyle = 'calc((100vh - 50px - 20px - ' + subtsBlockHeight + 'px) / 9 * 16)';
    return this.sanitizer.bypassSecurityTrustStyle(unsafeStyle);
  }

}
