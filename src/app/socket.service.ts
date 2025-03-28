import { ComponentRef, Injectable, ViewRef } from '@angular/core';
import { io } from 'socket.io-client';
import { UserListComponent } from './user-list/user-list.component';

@Injectable({
  providedIn: 'root'
})
export class SocketService 
{
  private urlSocket: string = "192.168.101.26:3000";

  private socket = io(this.urlSocket);

  private userListComponent!: UserListComponent;

  constructor()
  {
    this.socket.on('response',(data) =>
      {
        if(this.userListComponent)
        {
          this.userListComponent.users(data);
        }
      }
    );
  }

  public setUserList(useList: UserListComponent)
  {
    this.userListComponent = useList;
  }

  public consult()
  {
    this.socket.emit('consult',{});
  }

  public create(data: any)
  {
    this.socket.emit('create',data);
  }
}
