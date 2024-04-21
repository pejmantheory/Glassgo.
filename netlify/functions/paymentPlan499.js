// Import Stripe
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });

// Serverless function handler
exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
      headers: { 'Allow': 'POST' },
    };
  }

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 499, // Amount is in cents, so $4.99 is 499 cents
      currency: 'usd',
      description: 'Monthly Plan - $4.99',
      // Optional: Add metadata or adjust payment settings if needed
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        message: 'Payment intent created successfully'
      }),
    };
  } catch (error) {
    console.error('Stripe error:', error); // Output to server logs
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
