import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { ProperyBindingComponent } from './propery-binding/propery-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: 'interpolation', component: InterpolationComponent},
  { path: 'propery-binding', component: ProperyBindingComponent},
  { path: 'class-binding', component: ClassBindingComponent},
  { path: 'style-binding', component: StyleBindingComponent},
  { path: 'event-binding', component: EventBindingComponent},
  { path: 'template-ref-variable', component: TemplateRefVariableComponent},
  { path: 'two-way-binding', component: TwoWayBindingComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'employee-list', component: EmployeeListComponent},
  { path: 'employee-detail', component: EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
