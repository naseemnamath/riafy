import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/service/video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.sass']
})
export class VideoListComponent implements OnInit {

  videoList: any;

  constructor(
    public objVideoService: VideoService,
    public router: Router) { }

  ngOnInit() {
    this.videoList = this.objVideoService.videoList    
  }

  playVideo(videoPk) {    
    this.router.navigate(['video', videoPk])
  }
}
