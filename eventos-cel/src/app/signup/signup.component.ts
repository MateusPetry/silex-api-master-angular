import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private user: Object ={
    name: '',
    email: '',
    username: '',
    password:''
  };

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  signup(){
     this.http.post('users', this.user)
      .subscribe(res=> console.log(res));
  }

}
