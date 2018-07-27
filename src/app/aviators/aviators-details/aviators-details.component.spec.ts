import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviatorsDetailsComponent } from './aviators-details.component';

describe('AviatorsDetailsComponent', () => {
  let component: AviatorsDetailsComponent;
  let fixture: ComponentFixture<AviatorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviatorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviatorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
