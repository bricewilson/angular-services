import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/core/data.service';

import { Reader } from "app/models/reader";

@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styles: []
})
export class EditReaderComponent implements OnInit {

  selectedReader: Reader;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    let readerID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedReader = this.dataService.getReaderById(readerID);
  }

  saveChanges() {
    console.warn('Save reader not yet implemented.');
  }
}
