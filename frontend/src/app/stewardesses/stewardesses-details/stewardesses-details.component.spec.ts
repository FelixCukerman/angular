import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessesDetailsComponent } from './stewardesses-details.component';

describe('StewardessesDetailsComponent', () => {
  let component: StewardessesDetailsComponent;
  let fixture: ComponentFixture<StewardessesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
