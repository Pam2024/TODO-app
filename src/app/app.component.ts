import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    TestComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  value: string = '';
  allTodos: Array<Todo> = [];
  valuesToShow: Array<Todo> = [];

  addTodo() {
    if (this.value.trim() == '') {
      return;
    }

    var newValue:Todo={
      title:this.value,
      completed:false
    };

    this.allTodos.push(newValue);
    this.valuesToShow.push(newValue);
    this.value='';
  }

  filter(type: string){
    if (type == 'inprogress') {
      this.valuesToShow = this.allTodos.filter(x=>x.completed==false)
    }else if(type == 'done'){
      this.valuesToShow = this.allTodos.filter(x=>x.completed==true)
    }else{
      this.valuesToShow = this.allTodos
    }
  }
}


interface Todo {
  title:string;
  completed:boolean;
}
