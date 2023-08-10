import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-loading',
  templateUrl: './simple-loading.component.html',
  styleUrls: ['./simple-loading.component.scss']
})
export class SimpleLoadingComponent implements OnInit {
  @Input() text : any
  @Input() show : Boolean = true
  @Input() type : any

  msg : any
  theme : any
  constructor() { }

  ngOnInit(): void {
    this.msg = this.text
    this.setTheme()
  }

  setTheme() {
    switch(this.type) {
      case 1: {
        this.theme = 'bg-type-1'
        break;
      }

      case 2: {
        this.theme = 'bg-type-2'
        break;
      }

      case 3: {
        this.theme = 'bg-type-3'
        break;
      }

      case 4: {
        this.theme = 'bg-type-4'
        break;
      }

      default: {
        let themesArray = ['bg-type-1', 'bg-type-2', 'bg-type-3', 'bg-type-4']
        let index = Math.floor(Math.random() * 4)
        this.theme = themesArray[index]
      }
    }
  }
}
