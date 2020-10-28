import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import CustomersDeliveries from "./Screen/Customers-Deliveries";

export default function App() {
  return (
    <PaperProvider>
      <View>
        <CustomersDeliveries />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
