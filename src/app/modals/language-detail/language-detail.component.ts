import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.scss']
})
export class LanguageDetailComponent implements OnInit {

  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
