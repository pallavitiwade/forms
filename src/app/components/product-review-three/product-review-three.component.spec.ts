import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewThreeComponent } from './product-review-three.component';

describe('ProductReviewThreeComponent', () => {
  let component: ProductReviewThreeComponent;
  let fixture: ComponentFixture<ProductReviewThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReviewThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
