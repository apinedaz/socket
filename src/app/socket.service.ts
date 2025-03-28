import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService 
{
  private urlSocket: string = "192.168.101.26:3000";

  private socket = io(this.urlSocket);

  constructor() 
  {
  }

  public prueba()
  {
    this.socket.emit('prueba',{});
  }

  public create(data: any)
  {
    this.socket.emit('create',data);
  }
}
