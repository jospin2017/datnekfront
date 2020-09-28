import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-langage',
  templateUrl: './add-langage.component.html',
  styleUrls: ['./add-langage.component.scss']
})
export class AddLangageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    designation : new FormControl(null, [Validators.required]),
    niveau_p : new FormControl(null, [Validators.required]),
    niveau_e: new FormControl(null, [Validators.required]),
    niveau_c: new FormControl(null),
  });





  save(){

  }
}
