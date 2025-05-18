import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import axios from 'axios';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerInsightsService {
  private baseUrl = environment.apiUrl;

  constructor() {}

  // Fetch wishlist insights for a seller
  getWishlistInsights(sellerId: string): Observable<any> {
    // Convert Axios Promise to Observable
    return from(
      axios.get(`${this.baseUrl}/insights/${sellerId}`)
    );
  }

  // Track sold items based on wishlist
  trackSoldItems(itemId: string): Observable<any> {
    // Convert Axios Promise to Observable
    return from(
      axios.get(`${this.baseUrl}/trackSoldItems/${itemId}`)
    );
  }
}
