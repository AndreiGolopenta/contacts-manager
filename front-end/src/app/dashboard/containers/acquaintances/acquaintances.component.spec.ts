import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquaintancesComponent } from './acquaintances.component';

describe('AcquaintancesComponent', () => {
  let component: AcquaintancesComponent;
  let fixture: ComponentFixture<AcquaintancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquaintancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquaintancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
