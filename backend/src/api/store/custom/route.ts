import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  res.sendStatus(200);
}

import { POST } from './order'; // Importing the order POST handler

export default {
  method: 'POST',
  path: '/order', // This matches the `/api/store/order` endpoint
  handler: POST,
};
