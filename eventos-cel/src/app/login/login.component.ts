import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './../storage.service';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: Object ={
    'email': '',
    'password': ''
  };

  constructor(
    private http: HttpService, 
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login(){
    this.http.post('auth/login', this.user)
        .subscribe(res=> {
           this.storage.set('token', res.token);
           this.route.queryParams.subscribe(params => {
            if(params.to == 'confirm_subscription'){
              this.router.navigate(['/make-subscription']);
            } else {
              this.router.navigate(['/painel']);
            }
           });
          });
  }

}
