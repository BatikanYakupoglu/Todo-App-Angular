export class Model {
  user;
  items;

  constructor() {
    this.user = 'Batikan';
    this.items = [
      new ToDoItem('Kahvalti', true),
      new ToDoItem('Spor', false),
      new ToDoItem('Deniz', false),
      new ToDoItem('Sinema', true),
    ];
  }
}

export class ToDoItem {
  description;
  action;

  constructor(description: any, action: any) {
    this.description = description;
    this.action = action;
  }
}
