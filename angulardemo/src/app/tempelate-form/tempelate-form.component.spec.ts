import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempelateFormComponent } from './tempelate-form.component';

describe('TempelateFormComponent', () => {
  let component: TempelateFormComponent;
  let fixture: ComponentFixture<TempelateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempelateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempelateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
