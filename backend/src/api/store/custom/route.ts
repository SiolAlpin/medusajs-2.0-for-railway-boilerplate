// src/api/routes.ts
import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import orderHandler from '../custom/order'; // Adjust the path as needed

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  res.sendStatus(200); // Respond with a 200 status for GET requests
}

// Add the POST route for the custom order functionality
import { POST } from './order';  // Import the POST function from the order.ts file

export default {
  method: 'POST',
  path: '/order',
  handler: POST,  // Connect the POST handler to this route
};

