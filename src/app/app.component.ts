import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new Model();
  todoText = '';
  isDisplay = false;

  getName() {
    return this.model.user;
  }
  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }
  addItem() {
    if (this.todoText !== '') {
      this.model.items.push(new ToDoItem(this.todoText, false));
    }
  }
}
