import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventsCardComponent } from "../events/events-card.component";
import { Event } from "../models/events.model";
import {EventsService} from "../services/events.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [EventsCardComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  events: Event[]
  constructor(private eventsservice: EventsService) {}

  ngOnInit(): void {
    this.eventsservice.getAll().subscribe({
      next: (res) => {
        this.events = res;
        console.log(res);
      },
      error: (e) => console.error(e)
    });

  }
}
