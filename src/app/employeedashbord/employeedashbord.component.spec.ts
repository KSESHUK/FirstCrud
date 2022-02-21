import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedashbordComponent } from './employeedashbord.component';

describe('EmployeedashbordComponent', () => {
  let component: EmployeedashbordComponent;
  let fixture: ComponentFixture<EmployeedashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
