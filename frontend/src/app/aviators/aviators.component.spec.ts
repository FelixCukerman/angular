import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviatorsComponent } from './aviators.component';

describe('AviatorsComponent', () => {
  let component: AviatorsComponent;
  let fixture: ComponentFixture<AviatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
