import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'Favorite Authors',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  authors = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }

  getAuthorsFromService(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("Got Authors!", data)
      this.authors = data['data'];
    });
}

  removeAuthor(id: string){
    console.log("remove button working");
    console.log("deleting author " + id);
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      this.getAuthorsFromService();
    
    });
  }
}
