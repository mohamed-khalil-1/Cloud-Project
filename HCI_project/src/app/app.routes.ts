import { Routes } from '@angular/router';

export const routes: Routes = [
  // ... existing routes ...
  {
    path: 'product/:id',
    loadComponent: () => import('./product/product.component').then(m => m.ProductComponent),
    renderMode: 'client'  // Change to client-side rendering for dynamic routes
  },
  {
    path: 'chat/:id',
    loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent),
    renderMode: 'client'  // Change to client-side rendering for dynamic routes
  }
  // ... other routes ...
]; 