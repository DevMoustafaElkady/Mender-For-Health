import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialatisComponent } from './specialatis.component';

describe('SpecialatisComponent', () => {
  let component: SpecialatisComponent;
  let fixture: ComponentFixture<SpecialatisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialatisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialatisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
