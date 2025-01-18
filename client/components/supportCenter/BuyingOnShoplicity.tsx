import React from "react";
import AccordionComponent from "../AccordionComponent";

const BuyingOnShoplicity = () => {
  return (
    <div>
      {[
        {
          title: "How to get help before buy",
          content: {
            type: "p",
            text: `Something on your mind? We are here to help!
                     For questions on specific items, you can message us from the Shoplicity app or Shoplicity.com. 
                     For other questions on our policies or other topics, we recommend that you browse our Support Center where we answer our customers' most common questions. Happy shopping! `,
          },
        },
        {
          title: "How to search for item on shoplicity",
          content: {
            type: "p",
            text: `You can use the search button at the top of the Shoplicity app or Shoplicity.com to look for items. Enter descriptive terms in the search bar to start your search. For example: 'black sweatshirt' or 'casual shorts'. Search results are ordered by how relevant the items are to what you search for. You can change the order of your search results with the Sort by options above the search results. To quickly find what you are looking for, please use multiple descriptive terms to narrow down the results. For example, using 'little black dress' as a search term will generally produce fewer and more specific results than 'dress'. You can also use our image search feature(to use this feature, your app version needs to be 1.34 or higher ). You can log in to your account through the Shoplicity app, and on the home page, click the camera icon next to the search box at the top to select or take a photo of the item you want to search for. Then you can search for your favorite items on Shoplicity.`,
          },
        },
        {
          title: "I received an email about an order i did not place",
          content: {
            type: "p",
            text: `Please first check if a family member or friend has used your account details to place an order. It's also possible that someone may have misspelled their email address when registering for an account on Shoplicity and accidentally placed an order. If you suspect fraud, we recommend changing your account password immediately to protect your account and prevent unauthorized orders in the future.`,
          },
        },
        {
          title: "Tips for buying safely on shoplicity",
          content: {
            type: "list",
            text: [
              "Here are some best practices to help ensure safe purchases on Shoplicity.",
              "Credit card safety",
              ` - Never give your full credit card number, tax identification number, or password in an email, Shoplicity Message, or over the phone.`,
              `- Check your credit card statement regularly to track your spending and card activity.`,
              `- Keep track of your credit card: who is authorized to use it, and who has access to it.`,
              `Internet/computer safety`,
              ` - Change your passwords on a regular basis. The more complex a password is, the better you're protected.`,
              `- If you share your computer or device, sign out of any website accounts before letting others use it.`,
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

export default BuyingOnShoplicity;
