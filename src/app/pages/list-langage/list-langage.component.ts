import { Component, OnInit } from '@angular/core';
import {LangageService} from '../../shared/services/langage.service';
import {Langage} from '../../model/langage';

@Component({
  selector: 'app-list-langage',
  templateUrl: './list-langage.component.html',
  styleUrls: ['./list-langage.component.scss']
})
export class ListLangageComponent implements OnInit {

  langages:Langage[];

  constructor(private languageService:LangageService) { }

  ngOnInit(): void {
    this.getAllLanguage();
  }


  getAllLanguage(){

    this.languageService.list().subscribe(
      data=>{
        this.langages = data.rows;
        console.log(this.langages);
      }
    )
  }


}
