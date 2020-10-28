import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAlarmClockFormComponent } from './template-alarm-clock-form.component';

describe('TemplateAlarmClockFormComponent', () => {
  let component: TemplateAlarmClockFormComponent;
  let fixture: ComponentFixture<TemplateAlarmClockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAlarmClockFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAlarmClockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
