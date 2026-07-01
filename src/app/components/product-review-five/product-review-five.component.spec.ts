import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewFiveComponent } from './product-review-five.component';

describe('ProductReviewFiveComponent', () => {
  let component: ProductReviewFiveComponent;
  let fixture: ComponentFixture<ProductReviewFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReviewFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
