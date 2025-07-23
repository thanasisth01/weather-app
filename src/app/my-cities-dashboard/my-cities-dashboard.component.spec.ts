import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCitiesDashboardComponent } from './my-cities-dashboard.component';

describe('MyCitiesDashboardComponent', () => {
  let component: MyCitiesDashboardComponent;
  let fixture: ComponentFixture<MyCitiesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCitiesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCitiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
