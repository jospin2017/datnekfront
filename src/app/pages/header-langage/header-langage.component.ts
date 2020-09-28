import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-langage',
  templateUrl: './header-langage.component.html',
  styleUrls: ['./header-langage.component.scss']
})
export class HeaderLangageComponent implements OnInit {

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ne', label: 'Néerlandais.' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
