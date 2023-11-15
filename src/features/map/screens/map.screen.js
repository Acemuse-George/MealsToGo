import React from "react";
import MapView from "react-native-maps";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const MapScreen = () => {
  return (
    <SafeArea>
      <MapView style={{ height: "100%" }} />
    </SafeArea>
  );
};
