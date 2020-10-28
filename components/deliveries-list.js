import * as React from "react";
import { List, Appbar, Card, Text, Title, Surface } from "react-native-paper";
import { StyleSheet, View } from "react-native";
let randomColor = require("randomcolor");

let randColor = randomColor({
  luminosity: "light",
  format: "hsla",
});

export default function DeliveriesList() {
  return (
    <>
      <List.Item
        title="John Ruelan"
        description="Osmena Street, Gun-ob"
        left={(props) => (
          <List.Icon
            {...props}
            icon="battery-10"
            color="white"
            style={{
              backgroundColor: randomColor({
                luminosity: "bright",
                format: "rgb",
              }),
            }}
          />
        )}
        right={(props) => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 12,
              paddingRight: 15,
            }}
          >
            18
          </Text>
        )}
        style={{ marginVertical: 3, backgroundColor: "#f7f7f7" }}
      />

      <List.Item
        title="Jan Florendo"
        description="Babag Looc, Lapu-lapu City Cebu Province"
        left={(props) => (
          <List.Icon
            {...props}
            icon="battery-10"
            color="white"
            style={{
              backgroundColor: randomColor({
                luminosity: "bright",
                format: "rgb",
              }),
            }}
          />
        )}
        right={(props) => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 12,
              paddingRight: 15,
            }}
          >
            13
          </Text>
        )}
        style={{ backgroundColor: "#f7f7f7" }}
      />
      <List.Item
        title="Belle Iligan"
        description=" Paseo de Amores, Cebu City"
        left={(props) => (
          <List.Icon
            {...props}
            icon="battery-10"
            color="white"
            style={{
              backgroundColor: randomColor({
                luminosity: "bright",
                format: "rgb",
              }),
            }}
          />
        )}
        right={(props) => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 12,
              paddingRight: 15,
            }}
          >
            14
          </Text>
        )}
        style={{ backgroundColor: "#f7f7f7", marginVertical: 3 }}
      />
    </>
  );
}
