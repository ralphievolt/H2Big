import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";
import date from "date-and-time";
import {
  Avatar,
  Button,
  Card,
  Modal,
  Portal,
  TextInput,
  Title,
} from "react-native-paper";
import { useAtom } from "jotai";

import { VISIBLE, VISIBLE_SUCCESS } from "../atoms/";
import SuccessDialog from "./success_dialog";
import { setStatusBarTranslucent } from "expo-status-bar";

export default function AddCustomer() {
  const [visible, setVISIBLE] = useAtom(VISIBLE);
  const [fullname, setFullName] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [city, setCity] = React.useState("");
  const [dyte, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [visyble, setVISIBLE_SUCCESS] = useAtom(VISIBLE_SUCCESS);

  const containerStyle = { backgroundColor: "white", padding: 20 };

  const LeftContent = (props) => (
    <Avatar.Icon {...props} icon="account-plus-outline" />
  );

  const _hideModal = () => setVISIBLE(false);

  const _onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dyte;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const _showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const _showDatepicker = () => {
    _showMode("date");
  };

  const _saveCustomer = () => {
    setVISIBLE_SUCCESS(true);
  };

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={_hideModal}
          contentContainerStyle={containerStyle}
        >
          <Card>
            <Card.Title title="Customer Information" left={LeftContent} />
            <Card.Content>
              <Title>Please fill-up form</Title>

              <TextInput
                label="Fullname"
                value={fullname}
                onChangeText={(name) => setFullName(name)}
                style={{ marginVertical: 5 }}
              />

              <TextInput
                label="Street"
                value={street}
                onChangeText={(str) => setStreet(str)}
                style={{ marginVertical: 5 }}
              />
              <TextInput
                label="City"
                value={city}
                onChangeText={(cyt) => setCity(cyt)}
                style={{ marginVertical: 5 }}
              />
              <View>
                <Title style={{ fontWeight: "bold" }}>
                  Delivery: {date.format(dyte, "MMMM DD, YYYY ")}
                </Title>
              </View>
              <Button
                icon="calendar"
                mode="outlined "
                onPress={_showDatepicker}
              >
                Select Delivery Date
              </Button>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => setVISIBLE(false)}>Cancel</Button>
              <Button onPress={_saveCustomer}>Submit</Button>
            </Card.Actions>
          </Card>

          <View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dyte}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={_onChange}
              />
            )}
          </View>
        </Modal>
      </Portal>
      <SuccessDialog />
    </>
  );
}
