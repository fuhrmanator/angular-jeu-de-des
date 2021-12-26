import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarrerJeuComponent } from './demarrer-jeu.component';

describe('DemarrerJeuComponent', () => {
  let component: DemarrerJeuComponent;
  let fixture: ComponentFixture<DemarrerJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemarrerJeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemarrerJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
