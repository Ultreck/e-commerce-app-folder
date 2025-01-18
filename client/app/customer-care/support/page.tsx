"use client";
import AccountPreferences from "@/components/supportCenter/AccountPreferences";
import BuyingOnShoplicity from "@/components/supportCenter/BuyingOnShoplicity";
import Checkout from "@/components/supportCenter/Checkout";
import Delivery from "@/components/supportCenter/Delivery";
import FindMyOrder from "@/components/supportCenter/FindMyOrder";
import OrderChanges from "@/components/supportCenter/OrderChanges";
import Refund from "@/components/supportCenter/Refund";
import Return from "@/components/supportCenter/Return";
import Reviews from "@/components/supportCenter/Reviews";
import Shipping from "@/components/supportCenter/Shipping";
import SigningIn from "@/components/supportCenter/SigningIn";
import useSearchQuery from "@/hooks/useSearchQuery";
import React from "react";

const SupportHomePage = () => {
  const { searchParams } = useSearchQuery();
  const supportType = searchParams?.get("support-children-type");

  return (
    <div>
      <div className="text">
        {JSON.parse(supportType as string) === "Buying on Shoplicity" && (
          <BuyingOnShoplicity />
        )}
        {JSON.parse(supportType as string) === null && (
          <BuyingOnShoplicity />
        )}
        {JSON.parse(supportType as string) === "Checkout" && <Checkout />}
        {JSON.parse(supportType as string) === "Find my order" && (
          <FindMyOrder />
        )}
        {JSON.parse(supportType as string) === "Order changes" && (
          <OrderChanges />
        )}
        {JSON.parse(supportType as string) === "Reviews" && <Reviews />}
        {JSON.parse(supportType as string) === "Shipping" && <Shipping />}
        {JSON.parse(supportType as string) === "Delivery" && <Delivery />}
        {JSON.parse(supportType as string) === "Returns" && <Return />}
        {JSON.parse(supportType as string) === "Refunds" && <Refund />}
        {JSON.parse(supportType as string) === "Account preferences" && (
          <AccountPreferences />
        )}
        {JSON.parse(supportType as string) === "Signing in" && <SigningIn />}
      </div>
    </div>
  );
};

export default SupportHomePage;
