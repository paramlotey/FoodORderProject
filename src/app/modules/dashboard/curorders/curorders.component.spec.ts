import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurordersComponent } from './curorders.component';

describe('CurordersComponent', () => {
  let component: CurordersComponent;
  let fixture: ComponentFixture<CurordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
