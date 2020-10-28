import * as React from "react";

import NumberOfDeliveries from "../components/deliveries";
import DeliveriesList from "../components/deliveries-list";
import AppHeader from "../components/app-header";

export default function CustomersList() {
  return (
    <>
      <AppHeader />
      <NumberOfDeliveries />
      <DeliveriesList />
    </>
  );
}
