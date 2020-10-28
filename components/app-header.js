import * as React from "react";
import { Appbar } from "react-native-paper";

export default function AppHeader() {
  const today = new Date();

  // today.toLocaleDateString("en-US", {
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // })}
  const _handleMore = () => console.log("Shown more");

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#1ca3ec" }}>
        <Appbar.Content
          title="Customer Deliveries List"
          subtitle="Today's Delivery"
          color="white"
        />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    </>
  );
}
