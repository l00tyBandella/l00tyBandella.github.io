// Central server configuration. Replace with your server URL.
// For local development: http://localhost:3000
// For production: https://your-backend-domain.com

export const SERVER_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
export const CHECKOUT_NOTIFICATION_ENDPOINT = `${SERVER_URL}/api/checkout-notification`;
export const WEBHOOK_EMAIL_ENDPOINT = `${SERVER_URL}/api/email-webhook`;
