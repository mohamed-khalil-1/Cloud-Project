export const environment = {
  production: false,
  authApiUrl: 'http://localhost:31234',         // NodePort for auth-service
  productApiUrl: 'http://localhost:31235',      // NodePort for product-service
  notificationApiUrl: 'http://localhost:31236', // NodePort for notification-service
  wishlistApiUrl: 'http://localhost:31237',     // NodePort for wishlist-service
  chatApiUrl: 'http://localhost:31238',         // NodePort for chat-service
  environmentColor: '#4caf50',
  environmentName: 'Kubernetes',
  version: '1.0.0'
};
