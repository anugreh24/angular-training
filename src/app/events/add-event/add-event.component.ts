import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../../shared/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;

  isSaved: boolean;

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required), 
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      image: new FormControl('')
    });
  }

  addEventHandler(){
    console.log(this.eventForm); 
    console.log(this.eventForm.value);
    this.eventsService.createEvent(this.eventForm.value)
      .subscribe( (res: any) => {
        console.log(res);
        this.isSaved = true;
      });
  }

  goToEventsHandler(){
    // work on routing thru program
    this.router.navigate(['events']);
  }

}
