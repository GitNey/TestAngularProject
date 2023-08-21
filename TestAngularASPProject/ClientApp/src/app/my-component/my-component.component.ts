import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "/my-component.component.html",
})
export class MyComponent {
  randomWords: string[] = [
    "apple", "banana", "cherry", "orange", "grape",
    "strawberry", "kiwi", "watermelon", "pineapple", "blueberry",
    "peach", "pear", "mango", "lemon", "lime",
    "grapefruit", "plum", "melon", "raspberry", "blackberry",
    "apricot", "fig", "pomegranate", "coconut", "avocado",
    "peanut", "almond", "cashew", "walnut", "pecan",
    "hazelnut", "pistachio", "macadamia", "chestnut", "acorn",
    "potato", "carrot", "broccoli", "spinach", "lettuce",
    "tomato", "cucumber", "zucchini", "onion", "garlic",
    "pepper", "eggplant", "radish", "asparagus", "celery"
  ];

  favoriteFood = "dragon fruit";

  updateMessage(): void {
    const randIdx: number = Math.ceil(Math.random() * 49);
    this.favoriteFood = this.randomWords[randIdx];
  }
}