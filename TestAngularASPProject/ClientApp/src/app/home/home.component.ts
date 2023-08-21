import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  items : string[] = ['a', 'b', 'c', 'd', 'e'];

  constructor() {}

  log(): void {
    if (this.items.length) {
      this.items.forEach(item => window.console.log(item));
    }
  }

  ngOnInit(): void {
    this.log();
  }
}

