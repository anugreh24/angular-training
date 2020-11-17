import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventList:any[];

  constructor(private eventsService: EventsService ) { }

  ngOnInit(): void {
    this.eventsService.getEvents()
      .subscribe( (res: any ) => {
        console.log(res);
        this.eventList = res;
      });
  }

}
