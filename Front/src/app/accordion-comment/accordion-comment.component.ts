import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-comment',
  templateUrl: './accordion-comment.component.html',
  styleUrls: ['./accordion-comment.component.scss']
})
export class AccordionCommentComponent implements OnInit {
  @Input() comment: any;
  constructor() { }

  ngOnInit(): void {
  }

}
