import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ProperyBindingComponent } from './propery-binding/propery-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AComponent } from './a/a.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InterpolationComponent,
    ProperyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    AComponent,
    TemplateRefVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
