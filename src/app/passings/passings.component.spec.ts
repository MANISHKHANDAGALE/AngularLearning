import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingsComponent } from './passings.component';

describe('PassingsComponent', () => {
  let component: PassingsComponent;
  let fixture: ComponentFixture<PassingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
