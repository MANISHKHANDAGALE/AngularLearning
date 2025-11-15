import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingComponent } from './passing.component';

describe('PassingComponent', () => {
  let component: PassingComponent;
  let fixture: ComponentFixture<PassingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
