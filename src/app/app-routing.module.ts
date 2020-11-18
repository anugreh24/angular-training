import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RegisterComponent } from './events/register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sign-up', component: AddContactComponent},
  {path: 'events', component: EventsComponent},

  {
    path: 'events', children: [
      { path: '', component: EventsComponent },
      { path: 'add', component: AddEventComponent },
      { path: ':eventId', component: RegisterComponent}
    ]
  },

  {path: 'tickets', component: TicketsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

