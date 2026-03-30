import { loadStripe } from "@stripe/stripe-js";

const stripePublishableKey = (import.meta as any).env.VITE_STRIPE_PUBLISHABLE_KEY;

export const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;
