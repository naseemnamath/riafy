import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { VideoContentComponent } from './video-content/video-content.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material';
import { VideoListComponent } from './video-list/video-list.component';


@NgModule({
  declarations: [VideoContentComponent, VideoListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule { }
