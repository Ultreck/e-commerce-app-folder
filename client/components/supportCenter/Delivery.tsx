import React from "react";
import AccordionComponent from "../AccordionComponent";

const Delivery = () => {
  return (
    <div>
      {[
        {
          title: "How do i track my order?",
          content: {
            type: "p",
            text: `You can track the latest shipping status of your order on the Shoplicity app or Shoplicity.com. Simply visit "Your orders" and click the "Track" button next to your order to get a direct link to your shipping information. You will be able to see your shipping carrier, tracking number,delivery time, and latest shipping status on the page.

             If a tracking number isn't available yet, then your order may still be processed. Please allow 1-3 business days for warehouse processing. We will notify you when your tracking number is ready and your order has been shipped.

             If your order arrives late, as a gesture of courtesy, we offer you a ₦1,600 credit (standard shipping) to your account.`,
          },
        },
        {
          title: "Why is there no tracking update?",
          content: {
            type: "p",
            text: `If you haven't received any tracking updates on your order since it shipped, it's most likely because your order was sent from overseas warehouses. Tracking won't update until your package arrives in Nigeria and is picked up by local logistics service providers to deliver to your doorstep. The local logistics service providers will scan your package (only during business days) to update your tracking info.

              You can track your order by going to the "Your orders" page of Shoplicity.com or the Shoplicity app. From there you will be able to find your   order and click "Track" to view the latest tracking info.

              We know you're excited to get your order through and so are we! If your order arrives late, as a gesture of courtesy, we offer you a ₦1,600 credit (standard shipping) to your account as a small sign of appreciation for your patience.`,
          },
        },
        {
          title:
            "What is the delivery time for an item? how long will it take to arrive?",
          content: {
            type: "p",
            text: `Orders will be shipped as soon as possible. On the item page, you can find the delivery date, along with information about the percentage of orders delivered within that time frame, so you can plan accordingly.

              Once you place your order, you will be able to see the delivery time in "Your orders" of the Shoplicity app or Shoplicity.com.

             The delivery time refers to the expected arrival of your order, taking into account the time needed for both processing and transit.

             You can check the shipping time for your country at our Shipping Info page.`,
          },
        },
        {
          title: "What should i do if I'm missing item(s) from order?",
          content: {
            type: "list",
            text: [
              `There are two reasons why you may be missing items from your order.`,
              `1. Your order is overweight due to excess items.`,
              `For overweight orders, the order may split and ship out in multiple packages so that you get the other items in your order as quickly as possible. You can view details about your order in the 'Your orders' page of your Shoplicity account. Click 'track' next to your order so that you can see if your items were split into multiple packages.`,
              `2. Items went missing during packing or transportation.`,
              `If you are missing an item from your order and it is not scheduled to be sent in another package, you may request a refund by the following steps:`,
              `- Click 'You' from the Shoplicity app > 'Customer support' > 'Contact us', or click 'Support' on the top of Shoplicity.com, then click 'Chat with Shoplicity'`,
              `- Send 'missing item' and select the order you need help with`,
              `- Click 'Select missing item(s)'`,
              `- Select the item(s) and the quantity that is missing`,
              `- Upload the details of the missing item(s) and click 'Next'`,
              `- Select your refund method`,
              `- Click submit to request a refund for your missing item(s)`,
              `Once Shoplicity issues your refund, please allow 5-14 business days (up to 30 days) for the refund to reflect in your original payment method, as processing times vary across financial institutions. If you opt for a Shoplicity credit refund that can be used in the future purchase, it will be swiftly added to your Shoplicity Credit Balance within 3 minutes.`,
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

export default Delivery;
