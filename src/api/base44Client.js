import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "690c13d4f4edcdb28c5e1aa7", 
  requiresAuth: true // Ensure authentication is required for all operations
});
