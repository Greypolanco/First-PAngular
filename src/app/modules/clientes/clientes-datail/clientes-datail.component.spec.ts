import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDatailComponent } from './clientes-datail.component';

describe('ClientesDatailComponent', () => {
  let component: ClientesDatailComponent;
  let fixture: ComponentFixture<ClientesDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesDatailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
