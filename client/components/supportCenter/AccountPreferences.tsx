import React from "react";
import AccordionComponent from "../AccordionComponent";

const AccountPreferences = () => {
  return (
    <div>
      {[
        {
          title: "How to change my password?",
          content: {
            type: "list",
            text: [
              `Please follow these steps to change your password:`,
              `1. Sign in to Shoplicity app or Shoplicity.com and go to your account pag`,
              `2. Go to 'Settings' > 'Account security'.`,
              `3. Find 'Password' and click 'Edit' to change your password.`,
              `4. Enter your 'Old password' and 'New password' (Minimum 8 characters required).`,
              `5. Click 'Submit' and you're done.`,
              `If you used your Google, Facebook, Apple, or Twitter account details to log in to Shoplicity, then you will need to change your password details there.`,
            ],
          },
        },
        {
          title: "How to change my address?",
          content: {
            type: "list",
            text: [
              `Please follow these steps to change your address:`,
              `1. Sign in to Shoplicity app or Shoplicity.com and go to your account page`,
              `2. Go to 'Addresses'`,
              `3. From here, you can change your address by clicking "Edit" next to the address you want to change.`,
              `4. Update your address details and then click "Save".`,
              `If desired, you can also change your default address, delete addresses, or add a new address from this screen as well.`,
            ],
          },
        },
        {
          title: "How to change my email address?",
          content: {
            type: "p",
            text: `If you want to change your email address, you can "click here" and click "Edit" next to the "Email" line to make changes to your information.`,
          },
        },
        {
          title: "How to change my mobile phone number?",
          content: {
            type: "p",
            text: `If you want to change your phone number, you can click here and click "Edit" next to the "Mobile phone number" line to make changes to your information.`,
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

export default AccountPreferences;
