import React from "react";
import AccordionComponent from "../AccordionComponent";

const OrderChanges = () => {
  return (
    <div>
      {[
        {
          title: "How can I make a change or modify items in my order?",
          content: {
            type: "list",
            text: [
              `If your order has already been packed, you will not be able to make any changes or modifications to your order. Please wait for your items to arrive and then submit a return and refund request for the items you don't wish to keep.`,
              `If your order has not been preparing to ship, you can still cancel items in your order and you can also edit your item(s) if the requirements are fulfilled by following the steps below :`,
              `1. Sign into your account.`,
              `2. Select the avatar icon 'You' from the Shoplicity app or click the avatar icon on Shoplicity.com.`,
              `Choose 'Your orders' and find the relevant order in 'All orders'.`,
              `4. Select the item(s) you want to replace.`,
              `5. Click 'Submit to replace' and 'Confirm'.`,
              `Under certain conditions, the purchased item(s) can be replaced with the selected item(s) of the same price.`,
            ],
          },
        },
        {
          title: "How to cancle my order?",
          content: {
            type: "list",
            text: [
              `1. Sign into your account`,
              `2. Click the user avatar in the top right corner of the screen and click 'Your orders' from the lefthand men`,
              `3. Find the relevant order under 'All Orders' and click "Cancel Items`,
              `4. Follow the instructions on the screen and select the item you want to cancel, the reason for the cancellation, and choose your preferred refund method.`,
              `5. Your refund will be processed after submitting your cancellation request. And you will receive an email with the details of your refund.`,
              `If your order has been packed, please don't worry, you can still choose to return the item for a refund after the package arrives. You can return the items for refund within 90 days after placing the order. (Note: Some special items can not be returned for refund, please check the order page)`,
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

export default OrderChanges;
