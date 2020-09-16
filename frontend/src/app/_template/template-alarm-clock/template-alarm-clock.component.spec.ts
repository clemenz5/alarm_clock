import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAlarmClockComponent } from './template-alarm-clock.component';

describe('TemplateAlarmClockComponent', () => {
  let component: TemplateAlarmClockComponent;
  let fixture: ComponentFixture<TemplateAlarmClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAlarmClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAlarmClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
