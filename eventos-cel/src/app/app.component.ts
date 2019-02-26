import { StorageService } from './storage.service';
import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventos-cel';
  private pokemon: {} = {};

  constructor(public http: HttpService, public storage: StorageService) {}

  ngOnInit(){
    this.http.get('events')
      .subscribe(res => this.pokemon = res);
  }
}