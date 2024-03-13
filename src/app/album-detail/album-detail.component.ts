import { Component, OnInit } from '@angular/core';
import {Album, AlbumPhotos} from '../models';
import {ActivatedRoute} from '@angular/router';
import {CommonModule, Location} from '@angular/common';
import {AlbumsService} from '../albums.service';
import {ALBUMS} from '../fake-db';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {

  album!: Album;
  loaded!: boolean;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.getAlbum();
  }


  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbum() {
    this.loaded = false;
    this.albumsService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }

  goBack() {
    this.location.back();
  }

}