import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCommentComponent } from './accordion-comment.component';

describe('AccordionCommentComponent', () => {
  let component: AccordionCommentComponent;
  let fixture: ComponentFixture<AccordionCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
