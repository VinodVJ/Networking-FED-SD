import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCmpComponent } from './about-cmp.component';

describe('AboutCmpComponent', () => {
  let component: AboutCmpComponent;
  let fixture: ComponentFixture<AboutCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
