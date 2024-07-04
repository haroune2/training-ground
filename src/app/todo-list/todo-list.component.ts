import { Component } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title: this.newTodoTitle.trim(),
        completed: false,
        status: 'Not Started'
      };
      this.todos.push(newTodo);
      this.newTodoTitle = '';
    }
  }

  toggleTodoCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  changeTodoStatus(id: number, status: 'Not Started' | 'In Progress' | 'Completed') {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.status = status;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
