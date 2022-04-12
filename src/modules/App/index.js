import React from "react";
import { View, Text } from "react-native";

import { useTranslation } from "react-i18next";

const App = () => {


  const Greeting = ({ text }) => {
    const { t } = useTranslation("fallback");
    return <Text>{t(text)}</Text>;
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Greeting text="greeting" />
    </View>
  );
};

export default App;
