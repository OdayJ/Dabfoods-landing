import React from "react";
import Value from "./Value";

export default function ValueList() {
  return (
    <div className="flex gap-36 items-center justify-center">
      <Value name="Fast Delivery" desc="Get your products in 20 minutes!" />
      <Value name="Authentic Brands" desc="Disruptive and authentic brands" />
      <Value name="American Products" desc="America's Best to your doorstep" />
    </div>
  );
}
