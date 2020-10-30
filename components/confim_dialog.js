import React from "react";
import {
  Dialog,
  Portal,
  Button,
  Subheading,
  Divider,
} from "react-native-paper";
import { useAtom } from "jotai";

import { VISIBLE_CONFIRM } from "../atoms";

export default function ConfirmDialog() {
  const [visyble, setVISIBLE_CONFIRM] = useAtom(VISIBLE_CONFIRM);

  const hideDialog = () => setVISIBLE_CONFIRM(false);

  return (
    <Portal>
      <Dialog visible={visyble} onDismiss={hideDialog}>
        <Dialog.Content>
          <Subheading>Confirm Delivery?</Subheading>
        </Dialog.Content>
        <Dialog.Actions>
          <Button mode="text" onPress={() => setVISIBLE_CONFIRM(false)}>
            Yes
          </Button>

          <Button mode="text" onPress={() => setVISIBLE_CONFIRM(false)}>
            No
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
