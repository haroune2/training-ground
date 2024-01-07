import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcgplayerComponent } from './tcgplayer.component';

describe('TcgplayerComponent', () => {
  let component: TcgplayerComponent;
  let fixture: ComponentFixture<TcgplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TcgplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TcgplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
