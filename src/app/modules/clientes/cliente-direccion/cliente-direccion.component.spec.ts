import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDireccionComponent } from './cliente-direccion.component';

describe('ClienteDireccionComponent', () => {
  let component: ClienteDireccionComponent;
  let fixture: ComponentFixture<ClienteDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteDireccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
