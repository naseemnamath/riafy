import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { FooterComponent, HeaderComponent } from './layout';
import { MaterialModule } from './material';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SafePipe
  ]
})
export class SharedModule { }
