import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDynamicStyleComponent } from './signal-dynamic-style.component';

describe('SignalDynamicStyleComponent', () => {
  let component: SignalDynamicStyleComponent;
  let fixture: ComponentFixture<SignalDynamicStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDynamicStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalDynamicStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
