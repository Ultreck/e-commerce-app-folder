import React from "react";
import AccordionComponent from "../AccordionComponent";

const Checkout = () => {
  return (
    <div>
      {[
        {
          title: "How to remove an item from my cart",
          content: {
            type: "list",
            text: [
              "To remove an item from your shopping cart:",
              "1. Click the shopping cart icon from your Shoplicity app or Shoplicity.com",
              `2. Go to the cart and hover on the item that you want to remove and click the 'X' button to remove it.`,
            ],
          },
        },
        {
          title: "Why was my credit card declined during checkout?",
          content: {
            type: "list",
            text: [
              "Your credit card may be declined due to one of the following reasons:",
              "Your card info might be incorrect. Please confirm your card number, expiration date, billing address, and security code to ensure that the transaction can be processed.",
              `Card issuer bank declined your payment. Please call your bank for additional assistance.`,
              `If your financial details are confirmed and you think your card may be declined due to technical error, please try to checkout on another browser or try another payment method to complete your order.`,
            ],
          },
        },
        {
          title: "How to checkout as a guest on Shoplicity",
          content: {
            type: "list",
            text: [
              `Found the perfect items on Shoplicity, but not ready to commit to creating an account? Here's how you can check out as a guest:`,
              "1. After adding items to your cart, click the cart icon from Shoplicity.com to checkout.",
              `2. Proceed to checkout and select 'Continue as a guest.`,
              `3. Follow the onscreen instructions to fill out your payment and shipping details as usual to complete your order.`,
              `You'll receive an email confirmation once your order has been successfully placed.`,
            ],
          },
        },
      ].map((buy, index) => (
        <div className="text" key={index}>
          <AccordionComponent title={buy.title} content={buy.content} />
        </div>
      ))}
    </div>
  );
};

export default Checkout;
