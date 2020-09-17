import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateAlarmClockComponent } from './_template/template-alarm-clock/template-alarm-clock.component';
import { TemplateAlarmClockFormComponent } from './_template/template-alarm-clock-form/template-alarm-clock-form.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateAlarmClockComponent,
    TemplateAlarmClockFormComponent,
    TemplateHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
