import React from "react";
import { Card, Text, Surface } from "react-native-paper";
import { View } from "react-native";

export default function NumberOfDeliveries() {
  return (
    <Surface style={{ elevation: 2, marginBottom: 5 }}>
      <View style={{ flexDirection: "row", height: 120 }}>
        <Card
          style={{
            width: "50%",
            backgroundColor: "#f7f7f7",
          }}
        >
          <Card.Title title="Gallons" />
          <Card.Content>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 45,
                  fontWeight: "bold",
                  color: "#2989fa",
                }}
              >
                250
              </Text>
            </View>
          </Card.Content>
        </Card>
        <Card style={{ width: "50%" }}>
          <Card.Title title="Houses" />
          <Card.Content>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 45, fontWeight: "bold", color: "#2989fa" }}
              >
                18
              </Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </Surface>
  );
}
