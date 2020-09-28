import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../app.constants';
import {Langage} from '../../model/langage';

@Injectable({
  providedIn: 'root'
})
export class LangageService {

  constructor(private http:HttpClient) { }

  add(e:Langage){
    return this.http.post<Langage>(`${API_URL}/langue`,e)
  }

  list(){
    return this.http.get<any>(`${API_URL}/langues`)
  }

  getOne(id){
    return this.http.get<Langage>(`${API_URL}/langue/`+id)
  }

  delete(id){
    return this.http.delete<any>(`${API_URL}/langue/`+id)
  }

  update(e:Langage,id){
    return this.http.put<Langage>(`${API_URL}/langue/`+id,e)
  }

}
