import { PricingTable } from "@clerk/nextjs";
import React from "react";

function Pricing() {
  return (
    <div className="mt-28 text-3xl flex flex-col items-center justify-center w-full px-72" >
        <h2 className="text-4xl text-center font-game">Pricing</h2>
        <h2 className="text-xl text-center font-game">Join for Unlimited access to all features and courses</h2>
      <PricingTable />
    </div>
  ); 
}

export default Pricing;
