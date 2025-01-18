import AccordionComponent from "@/components/AccordionComponent";
import React from "react";

const Reviews = () => {
  return (
    <div>
      {[
        {
          title: "How to leave a review?",
          content: {
            type: "list",
            text: [
              `To leave a review:`,
              `1. Sign in to the Shoplicity app or Shoplicity.com and press on your user avatar to go to your account page`,
              `Go to "Your orders".`,
              `3.Find the relevant order and open the order details page`,
              `4. Press "Leave a review"`,
              `5. You will then be able to leave individual reviews and ratings and upload photos and/or videos for each item in your order.`,
              `6. When you're done leaving your reviews, press the "Submit" button at the bottom of the page.`,
              `We greatly value your feedback. Thank you for taking the time to leave product reviews so that we can continuously serve you better.`,
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

export default Reviews;
