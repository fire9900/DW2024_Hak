import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {EventsService} from "../services/events.service";
import { Event } from "../models/events.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(private httpService: EventsService){}
  event: Event = new Event;
  submit() {

  }
}
