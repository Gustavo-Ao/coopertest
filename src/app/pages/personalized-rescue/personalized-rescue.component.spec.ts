import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedRescueComponent } from './personalized-rescue.component';

describe('PersonalizedRescueComponent', () => {
  let component: PersonalizedRescueComponent;
  let fixture: ComponentFixture<PersonalizedRescueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizedRescueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedRescueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
