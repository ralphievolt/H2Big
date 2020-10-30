import * as React from "react";
import { Appbar, Menu, Divider } from "react-native-paper";
import { useAtom } from "jotai";

import { VISIBLE } from "../atoms/";
import AddCustomer from "../components/add-customer";

export default function AppHeader() {
  const [visible, setVisible] = React.useState(false);

  const [, setVISIBLE] = useAtom(VISIBLE);

  const _openMenu = () => setVisible(true);
  const _closeMenu = () => setVisible(false);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content
          title="Customer Deliveries List"
          subtitle="Today's Delivery"
          color="white"
        />

        <Menu
          onDismiss={_closeMenu}
          visible={visible}
          anchor={
            <Appbar.Action
              color="white"
              icon="dots-vertical"
              onPress={_openMenu}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setVISIBLE(true);
              setVisible(false);
            }}
            title="Add Customer"
          />
          <Divider />
          <Menu.Item onPress={() => {}} title="Delivery Chart" />
        </Menu>
      </Appbar.Header>
      <AddCustomer />
    </>
  );
}
