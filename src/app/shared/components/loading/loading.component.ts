import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() text : any
  @Input() show : Boolean = true

  msg : any

  constructor() { }

  ngOnInit(): void {
    this.msg = this.text
  }

}
