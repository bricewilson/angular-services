import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { allReaders } from 'app/data';
import { Reader } from "app/models/reader";

@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styles: []
})
export class EditReaderComponent implements OnInit {

  selectedReader: Reader;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let readerID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedReader = allReaders.find(reader => reader.readerID === readerID);
  }

  saveChanges() {
    console.warn('Save reader not yet implemented.');
  }
}
