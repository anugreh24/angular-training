import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../shared/services/events.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cost = 0;

  eventData: any;
  duplicateEventData: any;

  isUpdated: boolean;


  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit(): void {
    const EVENT_ID = this.activatedRoute.snapshot.paramMap.get('eventId');

    

    this.eventsService.getEvent(EVENT_ID)
      .subscribe( (res: any) => {
        console.log(res);
        this.eventData = res;
      });
  }



}
