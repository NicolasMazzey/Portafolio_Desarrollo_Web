import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaJuegoComponent } from './carta-juego.component';

describe('CartaJuegoComponent', () => {
  let component: CartaJuegoComponent;
  let fixture: ComponentFixture<CartaJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartaJuegoComponent]
    });
    fixture = TestBed.createComponent(CartaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
