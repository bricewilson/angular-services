import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { allBooks } from 'app/data';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: []
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedBook = allBooks.find(book => book.bookID === bookID);
  }

  setMostPopular(): void {
    console.warn('Setting most popular book not yet implemented.');
  }

  saveChanges(): void {
    console.warn('Save changes to book not yet implemented.');
  }
}
