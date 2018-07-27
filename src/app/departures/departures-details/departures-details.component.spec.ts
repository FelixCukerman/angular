import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparturesDetailsComponent } from './departures-details.component';

describe('DeparturesDetailsComponent', () => {
  let component: DeparturesDetailsComponent;
  let fixture: ComponentFixture<DeparturesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparturesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparturesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
