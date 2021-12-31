import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodresultsComponent } from './foodresults.component';

describe('FoodresultsComponent', () => {
  let component: FoodresultsComponent;
  let fixture: ComponentFixture<FoodresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
