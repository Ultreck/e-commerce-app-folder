import React from "react";
import AccordionComponent from "../AccordionComponent";

const SigningIn = () => {
  return (
    <div>
      {[
        {
          title: "How to create a Shoplicity account?",
          content: {
            type: "list",
            text: [
              `Welcome to Shoplicity! Join our community by registering for a Shoplicity account:`,
              `1. Open the Shoplicity app or visit Shoplicity.com.`,
              `2. Click 'Sign in/Register' on the app's main page or the top right corner of the website.`,
              `3. Review Shoplicity's Terms of Use and Privacy Policy.`,
              `4. Register with your email or phone number, or use Google, Facebook, X, or Apple to continue with your existing account.`,
            ],
          },
        },
        {
          title: "I can't sign into my account",
          content: {
            type: "list",
            text: [
              `If you are having trouble signing into your account, please first confirm that you are using the correct login email, phone number, or authentication method to login to your Shoplicity account.`,
              `If you originally signed in with your Facebook, Google, Twitter, or Apple login details, you will have to login through this method only.`,
              `If you are still unable to login, please click 'Forgot Your Password' to reset your password.'`,
            ],
          },
        },
        {
          title: "How to reset my password?",
          content: {
            type: "list",
            text: [
              `Please follow these steps to change your password:`,
              `1. Sign in to Shoplicity app or Shoplicity.com and go to your account page`,
              `2. Go to 'Settings' > 'Account security'.`,
              `3. Find 'Password' and click 'Edit' to change your password.`,
              `4. Enter your 'password' and 'confirm password' (Minimum 6 characters required).`,
              `5. Click 'Submit' and you're done!`,
              `If you are unable to sign into your account, please first confirm that you are using the correct email or phone number that you used to create your account. If you are not able to remember your password, click 'Forgot your password?' at the login screen to reset your password.`,
              `If you used your Google, Facebook, Apple, or Twitter account details to login to Shoplicity, then you will need to change your password details there.`,
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

export default SigningIn;
