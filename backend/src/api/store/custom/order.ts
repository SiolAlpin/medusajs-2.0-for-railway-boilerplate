import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { PrintifyService } from "/../printify/printify";  // Import from the printify folder

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const printifyService = new PrintifyService(process.env.PRINTIFY_API_KEY);  // Use the environment variable for API key
  try {
    const order = await printifyService.createOrder(req.body);  // Adjust the order structure as needed
    res.json(order);  // Return the response from Printify
  } catch (error) {
    console.error('Error creating Printify order:', error);
    res.status(500).json({ error: error.message });
  }
}
