import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51Nm6kJCY3f1OD3gTPjWguUcZFTSzBqYdW6XtsiwMklP8sej4udhxtPaXAFPth5oRITld05nd1DtmDLrvGNOd2ka200E5XZS9y0",
  {
    apiVersion: "2023-10-16",
    typescript: true,
  }
);
