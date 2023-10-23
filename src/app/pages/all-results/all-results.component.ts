import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit{


  constructor(private title: Title) {
  }
  ngOnInit() {
    this.title.setTitle("Все результаты")
  }
}
