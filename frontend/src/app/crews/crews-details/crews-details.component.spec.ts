import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewsDetailsComponent } from './crews-details.component';

describe('CrewsDetailsComponent', () => {
  let component: CrewsDetailsComponent;
  let fixture: ComponentFixture<CrewsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
