import React from "react";
import AccordionComponent from "../AccordionComponent";

const Refund = () => {
  return (
    <div>
      {[
        {
          title: "When will i receive my refund? how long does it take?",
          content: {
            type: "p",
            text: `For items returned and eligible for a refund, the refund process will be promptly initiated upon receipt of the item(s) and completion of a quality inspection. Once Shoplicity issues your refund, please allow 5-14 business days (up to 30 days) for the refund to reflect in your original payment method, as processing times vary across financial institutions. If you opt for a Shoplicity credit refund, it will be swiftly added to your Shoplicity Credit Balance within 3 minutes.`,
          },
        },
        {
          title: "How do i track my refund?",
          content: {
            type: "list",
            text: [
              `You may track your refund progress through any of the following ways:`,
              `1. Please go to 'Your orders' in Shoplicity app or on Shoplicity.com, find the corresponding order and click to view its details. Scroll to the refunded item and click 'Details'. You can then check your refund status and refund method for each refunded item.`,
              `2. Please go to your account in Shoplicity app or on Shoplicity.com, find the 'Messages' section and click your refund message notification to view the details.`,
              `3. If you enabled text or email notifications for your order, you can click on the links there to track your refund status as well.`,
              `Once Shoplicity issues your refund, please allow 5-14 business days (up to 30 days) for the refund to reflect in your original payment method, as processing times vary across financial institutions. If you opt for a Shoplicity credit refund, it will be swiftly added to your Shoplicity Credit Balance within 3 minutes.`,
            ],
          },
        },
        {
          title: "Will you let me know when i get my refund?",
          content: {
            type: "list",
            text: [
              `We will notify you when your refund has been successfully processed. However, once we issue your refund, it will take additional time for the financial institution to make funds available in your account.`,
              `If you chose to be refunded to your original payment account:`,
              `It typically takes 5-14 business days for your financial institution to process the refund, but this also depends on the payment method used. You can contact your financial institution to check the progress of your refund.`,
              `If you chose to be refunded to your Shoplicity credit balance:`,
              `The refund will be processed immediately and will appear within 3 minutes.`,
            ],
          },
        },
        {
          title: "What if my refund amount is incorrect?",
          content: {
            type: "list",
            text: [
              `When items are refunded, the refund amount may not match the item's price. This may be due to the following reasons:`,
              `1. There may be a sales tax on partial refunds.`,
              `2. You may have used coupons and credit.`,
              `3. There may be other refund records on the items.`,
              `If you have any questions, please contact our customer service team.`,
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

export default Refund;
