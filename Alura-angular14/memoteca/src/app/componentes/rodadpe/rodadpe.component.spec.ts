import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodadpeComponent } from './rodadpe.component';

describe('RodadpeComponent', () => {
  let component: RodadpeComponent;
  let fixture: ComponentFixture<RodadpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodadpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodadpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
