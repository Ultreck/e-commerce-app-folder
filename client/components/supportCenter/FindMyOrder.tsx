import React from "react";
import AccordionComponent from "../AccordionComponent";

const FindMyOrder = () => {
  return (
    <div>
      {[
        {
          title: "Why can't I find my order in my account?",
          content: {
            type: "list",
            text: [
              `We're sorry to know that you can't find your order. You can choose the following ways to find your orders.`,
              `1. Provide Order ID to find order`,
              `2. Provide phone number to find order`,
              `3. Provide email address to find order`,
              `4. Provide payment information to find order`,
            ],
          },
        },
        {
          title: "Where can i find my order ID?",
          content: {
            type: "list",
            text: [
              `Your order number always starts with 'Sh.' You may find your order ID number in one of the following ways:`,
              `- Reference your email confirmation to find your order ID in the email subject line.`,
              `- If you enabled text message tracking for your order, you can reference your past texts to see your order ID listed at the beginning of each message.`,
              `- From Shoplicity.com, sign into your account. Click into your user avatar in the top righthand corner. From the lefthand menu, under 'Your orders', click into 'All orders.' Your order ID can be found directly under each order entry.`,
              `- From the Shoplicity mobile app, sign into your account. Click into your user avatar at the bottom of your screen. Select 'Your orders' from the menu and click the specific order you are having trouble with. Your order ID is shown at the top of the order details page.`,
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

export default FindMyOrder;
