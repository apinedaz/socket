import { Component } from '@angular/core';
import { SocketService } from '../socket.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent 
{
  public name:string;
  public user:string;
  public password:string;
  public phone:string;
  public email:string;

  constructor(private router: Router,
              private socketService: SocketService
  )
  {
    this.name = '';
    this.user = '';
    this.password = '';
    this.phone = '';
    this.email = '';
  }

  public home()
  {
    this.router.navigate(['home']);
  }

  public create()
  {
    let data ={'name' : this.name, 'user' : this.user, 'password' : this.password, 'phone' : this.phone, 'email' : this.email};
    //let data =[this.name,this.user,this.password,this.phone,this.email];
    this.socketService.create(data);
  }
}
