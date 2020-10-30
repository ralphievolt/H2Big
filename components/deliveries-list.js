import React, { useState } from "react";
import { List, IconButton, Colors } from "react-native-paper";
import { Text, TouchableOpacity } from "react-native";
import { useAtom } from "jotai";

import { VISIBLE_CONFIRM, VISIBLE_INPUT_DIALOG } from "../atoms";
import ConfirmDialog from "./confim_dialog";
import InputDialog from "./input-dialog";

let randomColor = require("randomcolor");

export default function DeliveriesList() {
  const [, setVISIBLE_CONFIRM] = useAtom(VISIBLE_CONFIRM);
  const [, setVISIBLE_INPUT_DIALOG] = useAtom(VISIBLE_INPUT_DIALOG);

  return (
    <>
      <List.Item
        title="John Ruelan"
        description="Osmena Street, Gun-ob"
        left={() => (
          <TouchableOpacity onLongPress={() => setVISIBLE_INPUT_DIALOG(true)}>
            <Text
              style={{
                fontSize: 30,
                height: 50,
                width: 50,
                color: "#6b6666",
                fontWeight: "bold",
                paddingTop: 5,
                textAlign: "center",
                backgroundColor: randomColor({
                  luminosity: "light",
                  hue: "green",
                }),
              }}
            >
              11
            </Text>
          </TouchableOpacity>
        )}
        right={(props) => (
          <IconButton
            icon="truck-check"
            color={Colors.grey600}
            size={30}
            onPress={() => setVISIBLE_CONFIRM(true)}
          />
        )}
        style={{ marginVertical: 3, backgroundColor: "#f7f7f7" }}
      />
      <List.Item
        title="Jan Florendo"
        description="Babag Looc, Lapu-lapu City Cebu Province"
        left={() => (
          <TouchableOpacity onLongPress={() => setVISIBLE_INPUT_DIALOG(true)}>
            <Text
              style={{
                fontSize: 30,
                height: 50,
                width: 50,
                color: "#6b6666",
                fontWeight: "bold",
                paddingTop: 5,
                textAlign: "center",
                backgroundColor: randomColor({
                  luminosity: "light",
                  hue: "green",
                }),
              }}
            >
              7
            </Text>
          </TouchableOpacity>
        )}
        right={(props, zx) => (
          <IconButton
            icon="truck-check"
            color={Colors.grey600}
            size={30}
            onPress={() => setVISIBLE_CONFIRM(true)}
          />
        )}
        style={{ backgroundColor: "#f7f7f7" }}
      />
      <ConfirmDialog />
      <InputDialog />
    </>
  );
}
