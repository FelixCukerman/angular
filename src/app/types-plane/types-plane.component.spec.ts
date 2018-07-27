import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesPlaneComponent } from './types-plane.component';

describe('TypesPlaneComponent', () => {
  let component: TypesPlaneComponent;
  let fixture: ComponentFixture<TypesPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
