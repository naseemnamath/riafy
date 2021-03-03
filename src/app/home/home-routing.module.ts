import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoContentComponent } from './video-content/video-content.component';


const routes: Routes = [
  {
    path: '',
    component: VideoListComponent
  },
  {
    path: 'video/:id',
    component: VideoContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
