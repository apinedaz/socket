import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  @ViewChild(UserListComponent) userList! : UserListComponent;

  constructor(private socketService: SocketService)
  {
    this.socketService.setUserList(this.userList);
  }
  
  title = 'socket';
}
