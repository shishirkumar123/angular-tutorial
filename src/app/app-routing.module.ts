import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { ProperyBindingComponent } from './propery-binding/propery-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

const routes: Routes = [

  { path: 'interpolation', component: InterpolationComponent},
  { path: 'propery-binding', component: ProperyBindingComponent},
  { path: 'class-binding', component: ClassBindingComponent},
  { path: 'style-binding', component: StyleBindingComponent},
  { path: 'event-binding', component: EventBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
