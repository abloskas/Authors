import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getAuthors();
  }

  getAuthors(){
    return this._http.get("/authors");
  }

  addAuthor(author){
    return this._http.post('/authors', author);
  }

  getAuthor(id: string){
    console.log(`get author by id: ${id}`)
    return this._http.get(`/authors/${id}`);
  }

  UpdateAuthor(id: string, author){
    console.log(`sending update request to/authors/${id}`);
    return this._http.post(`/authors/${id}`, author);

  }

  deleteAuthor(id: string){
    console.log(`sending delete request to/authors/${id}`);
    return this._http.delete(`/authors/${id}`);
  }
}
