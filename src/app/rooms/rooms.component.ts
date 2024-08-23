import { Component } from '@angular/core';
import {Room} from '../rooms/room-types';
@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  hotel_name = "one-world"
  // Change the = to : to fix the error. 
  rooms : Room ={
    total_rooms:20,
    available_rooms: 5,
    booked_rooms:15
  }

}
