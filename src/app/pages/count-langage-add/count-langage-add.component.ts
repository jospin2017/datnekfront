import { Component, OnInit } from '@angular/core';
import {Langage} from '../../model/langage';
import {LangageService} from '../../shared/services/langage.service';

@Component({
  selector: 'app-count-langage-add',
  templateUrl: './count-langage-add.component.html',
  styleUrls: ['./count-langage-add.component.scss']
})
export class CountLangageAddComponent implements OnInit {

  nbres:number
  constructor(private languageService:LangageService) { }

  ngOnInit(): void {
    this.getAllLanguage();
  }


  getAllLanguage(){

    this.languageService.list().subscribe(
      data=>{
        this.nbres = data.count;
      }
    )
  }

}
