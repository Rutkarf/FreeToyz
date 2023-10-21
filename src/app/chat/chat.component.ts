import { Component } from '@angular/core';
import { SocketService } from './socket.service';  // Correction du chemin d'importation
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  message: string = '';
  messages: string[] = [];

  constructor(private socketService: SocketService) {
    this.socketService.receiveMessage().subscribe((data: string) => {
      this.messages.push(data);
    });
  }

  sendMessage() {
    this.socketService.sendMessage(this.message);
    this.message = '';
  }
}