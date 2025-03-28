import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SocketService } from '../socket.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent 
{
  public data: any;
  public displayedColumns: string[] = ['name', 'user', 'email', 'phone'];

  constructor(private router: Router, private socketService: SocketService)
  {
    this.socketService.setUserList(this);
  }

  public users(data: any)
  {
    this.data = data;
  }

  public home()
  {
    this.router.navigate(['home']);
  }

  public consult()
  {
    this.socketService.consult();
  }
}
