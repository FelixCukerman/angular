import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparturesListComponent } from './departures-list.component';

describe('DeparturesListComponent', () => {
  let component: DeparturesListComponent;
  let fixture: ComponentFixture<DeparturesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparturesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
