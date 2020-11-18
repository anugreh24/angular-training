import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../../shared/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {

  eventForm: FormGroup;

  isSaved: boolean;

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required), 
      description: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required), 
      time: new FormControl('', Validators.required), 
      cost: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
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

  ngOnDestroy():void{

  }

  goToEventsHandler(){
    // work on routing thru program
    this.router.navigate(['events']);
  }

}
