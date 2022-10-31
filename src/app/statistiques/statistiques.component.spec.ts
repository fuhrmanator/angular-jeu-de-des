import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StatistiquesComponent } from './statistiques.component';

describe('StatistiquesComponent', () => {
  let component: StatistiquesComponent;
  let fixture: ComponentFixture<StatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
