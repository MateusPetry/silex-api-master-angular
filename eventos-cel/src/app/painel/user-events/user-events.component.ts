import { StorageService } from './../../storage.service';
import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  //private events: Array<{}>;
  private events: any;

  constructor(
    private httpService: HttpService,
    private storage: StorageService
    ) { }

  ngOnInit() {
    let token = this.storage.get('token');

    this.httpService.get('users/events', token).subscribe(data => {
      this.events = data;
    });
  }

}
