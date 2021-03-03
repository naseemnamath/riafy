import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/shared/service/video.service';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.sass']
})
export class VideoContentComponent implements OnInit {
  videoPk: any;
  videoItem:any;
  videoList: any;

  constructor(
    public route: ActivatedRoute,
    public objVideoService: VideoService) {   }



  ngOnInit() {
    this.videoList = this.objVideoService.videoList
    this.route.params.subscribe(params => {
      this.videoPk = params['id']
      this.videoItem = this.videoList.find(v => v.intPk == this.videoPk)
    })    
  }

}
