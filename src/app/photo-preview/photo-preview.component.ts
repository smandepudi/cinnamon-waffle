import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss']
})
export class PhotoPreviewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PhotoPreviewComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
