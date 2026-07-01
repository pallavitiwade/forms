import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewTwoComponent } from './product-review-two.component';

describe('ProductReviewTwoComponent', () => {
  let component: ProductReviewTwoComponent;
  let fixture: ComponentFixture<ProductReviewTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReviewTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
