import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviatorsListComponent } from './aviators-list.component';

describe('AviatorsListComponent', () => {
  let component: AviatorsListComponent;
  let fixture: ComponentFixture<AviatorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviatorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
