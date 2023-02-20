import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { GalleryRoutes } from './gallery.routing';
import { HomeModule } from '../home/home.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BalmitraComponent } from './balmitra/balmitra.component';



@NgModule({
  declarations: [
    PhotosComponent,
    BalmitraComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    RouterModule.forChild(GalleryRoutes),
    NgxPaginationModule,
    RouterModule.forChild(GalleryRoutes)
  ]
})
export class GalleryModule { }
