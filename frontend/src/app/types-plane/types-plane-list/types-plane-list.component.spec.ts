import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesPlaneListComponent } from './types-plane-list.component';

describe('TypesPlaneListComponent', () => {
  let component: TypesPlaneListComponent;
  let fixture: ComponentFixture<TypesPlaneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesPlaneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesPlaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
