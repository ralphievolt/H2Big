import React from "react";
import {
  Dialog,
  Text,
  Portal,
  Button,
  TextInput,
  Subheading,
  Divider,
  Paragraph,
} from "react-native-paper";
import { useAtom } from "jotai";

import { VISIBLE_INPUT_DIALOG } from "../atoms";

export default function InputDialog() {
  const [visyble, setVISIBLE_INPUT_DIALOG] = useAtom(VISIBLE_INPUT_DIALOG);

  const hideDialog = () => setVISIBLE_INPUT_DIALOG(false);

  return (
    <Portal>
      <Dialog visible={visyble} onDismiss={hideDialog}>
        <Dialog.Title>Confirm Delivery?</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Number of Gallons"
            placeholder="0"
            keyboardType={"numeric"}
            // value={city}
            // onChangeText={(cyt) => setCity(cyt)}
            style={{ marginVertical: 5 }}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button mode="text" onPress={() => setVISIBLE_INPUT_DIALOG(false)}>
            Submit
          </Button>
          <Button mode="text" onPress={() => setVISIBLE_INPUT_DIALOG(false)}>
            Cancel
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
