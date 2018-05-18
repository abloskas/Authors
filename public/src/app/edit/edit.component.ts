import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author = {name: ""};
  id: string;
  errors: null;
  private author_params: any;
    

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  this.author_params = this._route.params.subscribe(params =>{
    this.id = params['id'];
    this.getAuthor(this.id);
    console.log("id oninit", this.id);
  })
  
  }

  getAuthor(id: string) {
    this._httpService.getAuthor(this.id).subscribe(data => {
      console.log("edit page", data);
      if(data["message"] == "Success") {
        this.author = data["data"];
      }
    });
  }

  editAuthor() {
    console.log("first" + this.id);
    this._httpService.UpdateAuthor(this.id, this.author).subscribe(data => {
      if(data["message"] == "Success") {
        console.log('updated task', data['message']);
        this._router.navigate(['/']);
        }
        else{
          this.errors = data["error"];
        }
      });
    
  }
}
