import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/events.model';

@Component({
  selector: 'app-events-card',
  standalone: true,
  imports: [],
  templateUrl: './events-card.component.html',
  styleUrl: './events-card.component.scss'
})
export class EventsCardComponent implements OnInit {
  @Input() data: Event;

  ngOnInit(): void {

  }
}
