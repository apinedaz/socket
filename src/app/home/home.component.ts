import { Component } from '@angular/core';
import { SocketService } from '../socket.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
  constructor(private router: Router)
  {
  }

  public create()
  {
    this.router.navigate(['create-user']);
  }

  public list()
  {
    this.router.navigate(['list-user']);
  }
}
