import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewFourComponent } from './product-review-four.component';

describe('ProductReviewFourComponent', () => {
  let component: ProductReviewFourComponent;
  let fixture: ComponentFixture<ProductReviewFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReviewFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
