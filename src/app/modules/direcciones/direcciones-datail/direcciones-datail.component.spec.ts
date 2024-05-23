import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesDatailComponent } from './direcciones-datail.component';

describe('DireccionesDatailComponent', () => {
  let component: DireccionesDatailComponent;
  let fixture: ComponentFixture<DireccionesDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionesDatailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionesDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
