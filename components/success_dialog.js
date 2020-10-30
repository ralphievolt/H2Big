import React from "react";
import { Dialog, Text, Portal, Button, Subheading } from "react-native-paper";
import { useAtom } from "jotai";

import { VISIBLE_SUCCESS } from "../atoms";

export default function SuccessDialog() {
  const [visyble, setVISIBLE_SUCCESS] = useAtom(VISIBLE_SUCCESS);

  const hideDialog = () => setVISIBLE_SUCCESS(false);

  return (
    <Portal>
      <Dialog visible={visyble} onDismiss={hideDialog}>
        <Dialog.Content>
          <Subheading>New customer saved.</Subheading>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            // icon="check"
            mode="text"
            onPress={() => setVISIBLE_SUCCESS(false)}
          >
            close
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
