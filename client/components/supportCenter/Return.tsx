import React from "react";
import AccordionComponent from "../AccordionComponent";

const Return = () => {
  return (
    <div>
      {[
        {
          title: "Is free shipping available on Shoplicity?",
          content: {
            type: "p",
            text: `Free standard shipping is available. Please visit our shipping info page.`,
          },
        },
        {
          title: "Why is my order taking longer to process then normal?",
          content: {
            type: "p",
            text: `Orders are usually processed within 1-3 days. However, if your order is taking a longer time to process, it could be due to particular items in your order which have longer than normal processing times.

              You can view the delivery time for each item in your order by going to their specific product pages. If you would like to receive the other items in your order ASAP, you may cancel the other longer-processing item(s) for a refund. Your remaining items can then be shipped out immediately.

             We know you're excited to get your order through and so are we! If your order arrives late, as a gesture of courtesy, we offer you a ₦1,600 credit (standard shipping) to your account as a small sign of appreciation for your patience.`,
          },
        },
        {
          title: "What is late delivery compensation?",
          content: {
            type: "p",
            text: `If your order is not delivered on or before the latest delivery date provided to you, as a gesture of courtesy, we offer you a credit within 48 hours of that date. The credit will be issued to your Shoplicity credit balance in the currency used for the order and with the exchange rate from when your order was placed. You can check the compensation amount for late delivery in your order details.
             To learn more about our late delivery compensation policy, please visit:`,
          },
        },
        {
          title: "Why was my order divided into two or more packages?",
          content: {
            type: "p",
            text: `Some items from your order may be shipped separately to help you receive them faster. While most items can be processed within 1-3 days, some items may have longer processing time.
             Your order may also be divided into two or more packages if the total combined weight exceeds the weight limits of couriers.
            If your order is divided into multiple packages, you will be able to see the delivery times and individual tracking numbers for each package in separate tabs on your order's tracking page. Just go to "Your orders" on Shoplicity.com or your Shoplicity app and click "Track" button next to the order you want to check.`,
          },
        },
        {
          title: "How do i update my shipping address?",
          content: {
            type: "list",
            text: [
              `If your order has not yet been packed, you can follow the steps below to update your shipping address:`,
              `1. Go to "Your orders" in Shoplicity.com or your Shoplicity app,`,
              `2. Click on your order to view your order details,`,
              `3. Next to your address, click on "Edit" to change address,`,
              `4. If the change is successful, you will receive a prompt that says "your address has been updated" and the order details will show the latest address.`,
              `If your order has already been packed, Shoplicity's logistics partners unfortunately will not be able to update your shipping address. If your package has not yet been delivered, you may contact the carrier directly to see if it would be possible to update your shipping address.`,
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

export default Return;
