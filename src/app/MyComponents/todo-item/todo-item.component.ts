import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{

  @Input() todo: Todo = {} as Todo;
  @Input() i: number=0; 
  @Output() tododelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


  Delete(todo: Todo){
    this.tododelete.emit(todo);
    console.log("Delete has been trigered");

  }
  onCheckboxClick(todo: Todo){
   this.todoCheckbox.emit(todo);
  }
  
  ngOnInit(): void {
    
  }

  
  
}
