import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreateOnomatopiaComponent } from './app-create-onomatopia.component';

describe('AppCreateOnomatopiaComponent', () => {
  let component: AppCreateOnomatopiaComponent;
  let fixture: ComponentFixture<AppCreateOnomatopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCreateOnomatopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCreateOnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
