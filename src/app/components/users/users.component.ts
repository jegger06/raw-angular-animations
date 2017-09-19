import { Component, OnInit, HostBinding } from '@angular/core';

import { routeFadeStateTrigger, routeSlideStateTrigger } from '../../animations/route.animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}