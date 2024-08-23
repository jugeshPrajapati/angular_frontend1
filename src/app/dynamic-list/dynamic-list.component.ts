import { Component,Input,Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.css'
})
export class DynamicListComponent {
  @Input ("item") listItem: any;
  @Input () selectItem: any; // get input from parent
  @Output() itemVal = new EventEmitter<string>(); //send output to parent
  itemClicked(listItem:string){
    this.itemVal.emit(listItem);

  }
 
}
