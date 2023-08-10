import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLoadingComponent } from './simple-loading.component';

describe('SimpleLoadingComponent', () => {
  let component: SimpleLoadingComponent;
  let fixture: ComponentFixture<SimpleLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
