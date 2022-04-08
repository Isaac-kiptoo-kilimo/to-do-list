import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  toogleDetails(index){
    this.tasks[index].showDescription=!this.tasks[index].showDescription;
  }
  completeTask(isComplete,index){
    if(isComplete){
      this.tasks.splice(index,1)
    }
  }

  tasks:Task[]= [
    new Task(1,"group work" , "Learning Typescript"),
    new Task(2,"One on one session" ,"Addressing blockers"),
    new Task(3,"feedback session" ," Giving each other feedback on how the week was"),
    new Task(4,"Career talk" ,"How to write cv"),
    new Task(5,"Assignment" ,"Completing our IPs"),


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
