import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapresultsComponent } from './mapresults.component';

describe('MapresultsComponent', () => {
  let component: MapresultsComponent;
  let fixture: ComponentFixture<MapresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
