import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;

  isSaved: boolean;

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {

    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  addContactHandler() {
    console.log(this.contactForm);
    console.log(this.contactForm.value);
    this.contactService.createContact(this.contactForm.value)
      .subscribe((res: any) => {
        console.log(res);
        this.isSaved = true;
      });
  }

  goToContactsHandler() {
    this.router.navigate(['']);
  }

}
