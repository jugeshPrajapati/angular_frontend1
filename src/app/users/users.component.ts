import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DynamicListComponent} from '../dynamic-list/dynamic-list.component'
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule,CommonModule,DynamicListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  name:string = " jugesh ";
  items= [1,3,4,5,9];
  itemClicked1(itemVal:string){
    console.log('child to parent',itemVal);
  };
}
