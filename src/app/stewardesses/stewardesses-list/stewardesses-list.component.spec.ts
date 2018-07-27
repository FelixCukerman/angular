import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessesListComponent } from './stewardesses-list.component';

describe('StewardessesListComponent', () => {
  let component: StewardessesListComponent;
  let fixture: ComponentFixture<StewardessesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
