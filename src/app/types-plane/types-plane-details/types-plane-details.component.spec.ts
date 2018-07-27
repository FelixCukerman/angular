import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesPlaneDetailsComponent } from './types-plane-details.component';

describe('TypesPlaneDetailsComponent', () => {
  let component: TypesPlaneDetailsComponent;
  let fixture: ComponentFixture<TypesPlaneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesPlaneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesPlaneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
