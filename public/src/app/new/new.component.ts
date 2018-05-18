import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor = {};
  errors = null;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: '' };
  }

  addAuthor() {
    console.log("adding a new author:", this.newAuthor);
    const observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => {
      if(data["message"] == "Success") {
      console.log('new author', data);
      this.newAuthor = { name: '' };
      this._router.navigate(['/']);
      }
      else{
        this.errors = data["error"];
      }
    });
  }

}
