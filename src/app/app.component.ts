import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PokemonService } from './pokemon.service';
export interface Subtask {
  id: number;
  title: string;
  completed: boolean;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  status: 'Not Started' | 'In Progress' | 'Completed';
  subtasks: Subtask[];
  color: string;
  startDate: Date;
  endDate: Date;
  priority: 'Low' | 'Medium' | 'High';
}

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  newTodoTitle: string = '';
  newTodoStartDate: Date | null = null;
  newTodoEndDate: Date | null = null;
  newTodoPriority: 'Low' | 'Medium' | 'High' = 'Low';

  // Pour la recherche par nom
  searchQuery: string = '';

  // Pour le filtrage par date
  startDateFilter: Date | null = null;
  endDateFilter: Date | null = null;

  ngOnInit() {
    this.loadInitialTodos();
    this.filteredTodos = [...this.todos];
  }

  addTodo() {
    if (this.newTodoTitle.trim() && this.newTodoStartDate && this.newTodoEndDate) {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title: this.newTodoTitle.trim(),
        completed: false,
        status: 'Not Started',
        subtasks: [],
        color: this.getRandomColor(),
        startDate: this.newTodoStartDate,
        endDate: this.newTodoEndDate,
        priority: this.newTodoPriority
      };
      this.todos.push(newTodo);
      this.newTodoTitle = '';
      this.newTodoStartDate = null;
      this.newTodoEndDate = null;
      this.newTodoPriority = 'Low';
      this.filterTodos(); // Re-filtrer les tâches
    }
  }

  toggleTodoCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.filterTodos(); // Re-filtrer les tâches
    }
  }

  changeTodoStatus(id: number, status: 'Not Started' | 'In Progress' | 'Completed') {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.status = status;
      this.filterTodos(); // Re-filtrer les tâches
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.filterTodos(); // Re-filtrer les tâches
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private loadInitialTodos() {
    this.todos = [
      {
        id: 1,
        title: 'Acheter du lait',
        completed: false,
        status: 'Not Started',
        subtasks: [{ id: 1, title: 'Vérifier les offres', completed: false }],
        color: '#FFC107',
        startDate: new Date('2024-07-01'),
        endDate: new Date('2024-07-03'),
        priority: 'Low'
      },
      {
        id: 2,
        title: 'Faire les courses',
        completed: false,
        status: 'In Progress',
        subtasks: [
          { id: 2, title: 'Faire une liste', completed: true },
          { id: 3, title: 'Acheter des fruits', completed: false }
        ],
        color: '#4CAF50',
        startDate: new Date('2024-07-02'),
        endDate: new Date('2024-07-05'),
        priority: 'Medium'
      },
      {
        id: 3,
        title: 'Préparer la réunion',
        completed: false,
        status: 'Not Started',
        subtasks: [
          { id: 4, title: 'Rassembler les documents', completed: false },
          { id: 5, title: 'Préparer la présentation', completed: false }
        ],
        color: '#2196F3',
        startDate: new Date('2024-07-04'),
        endDate: new Date('2024-07-07'),
        priority: 'High'
      },
      {
        id: 4,
        title: 'Réviser le code',
        completed: false,
        status: 'Not Started',
        subtasks: [{ id: 6, title: 'Lire la documentation', completed: false }],
        color: '#9C27B0',
        startDate: new Date('2024-07-08'),
        endDate: new Date('2024-07-10'),
        priority: 'Medium'
      },
      {
        id: 5,
        title: 'Planifier les vacances',
        completed: false,
        status: 'Not Started',
        subtasks: [{ id: 7, title: 'Réserver les billets', completed: false }],
        color: '#E91E63',
        startDate: new Date('2024-07-15'),
        endDate: new Date('2024-07-20'),
        priority: 'Low'
      }
    ];

    // Initialiser la liste filtrée
    this.filteredTodos = [...this.todos];
  }

  // Filtrer les tâches en fonction des critères
  filterTodos() {
    this.filteredTodos = this.todos
      .filter(todo => 
        // Filtrage par nom
        this.searchQuery === '' || todo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      .filter(todo =>
        // Filtrage par date de début
        !this.startDateFilter || todo.startDate >= this.startDateFilter
      )
      .filter(todo =>
        // Filtrage par date de fin
        !this.endDateFilter || todo.endDate <= this.endDateFilter
      );
  }

  onSearchChange() {
    this.filterTodos();
  }

  onStartDateChange() {
    this.filterTodos();
  }

  onEndDateChange() {
    this.filterTodos();
  }
}