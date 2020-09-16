import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateAlarmClockComponent } from './_template/template-alarm-clock/template-alarm-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateAlarmClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
