import React, { useContext } from "react";
import { Button, Text } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};
