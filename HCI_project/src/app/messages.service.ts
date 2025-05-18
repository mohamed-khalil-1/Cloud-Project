import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiBaseUrl: string = environment.apiUrl;

  constructor() { }

  async getMessages(userId: string, targetUserId: string) {
    return await axios.get(`${this.apiBaseUrl}/chat/${userId}/${targetUserId}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching messages', error);
        throw error;
      });
  }

  // Send a message
  async sendMessage(senderId: string, receiverId: string, message: string | null) {
    return await axios.post(`${this.apiBaseUrl}/chat`, {
      senderId,
      receiverId,
      message,
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error sending message', error);
      throw error;
    });
  }
}
