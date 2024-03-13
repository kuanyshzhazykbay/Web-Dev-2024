import {Component, OnInit} from '@angular/core';
import {Album} from '../models';
import {AlbumsService} from '../albums.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  loaded!: boolean;
  newAlbum: string;

  constructor(private albumsService: AlbumsService) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    const album: Album = {
      title: this.newAlbum,
      id: 0,
      body: '' 
    };
    this.loaded = false;
    this.albumsService.addAlbum(album).subscribe(() => {
      this.getAlbums(); 
      this.newAlbum = '';
      this.loaded = true;
    });
  }
  
  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }

}
