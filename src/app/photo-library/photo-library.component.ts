import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService } from '../notification.service';
import { VERSION, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PhotoPreviewComponent } from '../photo-preview/photo-preview.component';

export interface Section {
  id: string;
  image: string;
  name: string;
  updated: Date;
  selected: boolean;
}

@Component({
  selector: 'app-photo-library',
  templateUrl: './photo-library.component.html',
  styleUrls: ['./photo-library.component.scss']
})
export class PhotoLibraryComponent implements OnInit {

  @Output() photosSelected = new EventEmitter();
  selectedPhotosCount: number = 0;

  constructor(private notifyService: NotificationService, private matDialog: MatDialog) { }
  photos: Section[] = [
    {
      id: '1',
      image: './assets/Moana.jpeg',
      name: 'Moana',
      updated: new Date('1/1/16'),
      selected: false
    },
    {
      id: '2',
      image: './assets/bugsLife.jpg',
      name: 'Bugs Life',
      updated: new Date('1/17/16'),
      selected: false
    },
    {
      id: '3',
      image: './assets/Frozen.jpg',
      name: 'Frozen',
      updated: new Date('1/28/16'),
      selected: false
    },
    {
      id: '4',
      image: './assets/ToyStory.jpg',
      name: 'Frozen',
      updated: new Date('1/28/16'),
      selected: false
    }
  ];
  ngOnInit() {
  }

  changeStatus(id, event): void {
    let foundPhoto = this.photos.find(x => x.id == id);
    foundPhoto.selected = !foundPhoto.selected;
    let foundPhotos = this.photos.filter(x => x.selected == true)
    this.selectedPhotosCount = foundPhotos.length;
  }
  showLikeSuccess() {
    this.notifyService.showSuccess('Successfully liked ',  this.selectedPhotosCount + " photos" );
  }
  // openDialog() {
  //   const dialogConfig = new MatDialogConfig();
  //   this.matDialog.open(PhotoPreviewComponent, dialogConfig);
  // }
  showShareSuccess() {
    this.notifyService.showSuccess('Successfully shared ',  this.selectedPhotosCount + " photos" );
  }
}
