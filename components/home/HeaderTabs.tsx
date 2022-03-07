import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../styles/home/headerTabs";

interface HeaderItemProps {
  text: string;
  active: string;
  textColor: string;
  backgroundColor: string;
  setActiveTab: (prop: string) => void;
}

const HeaderTabs = () => {
  const buttons = ["Delivery", "Pickup"];
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={styles.container}>
      {buttons.map((text, index) => (
        <HeaderButton
          key={index}
          text={text}
          active={activeTab}
          setActiveTab={setActiveTab}
          textColor={activeTab === text ? "#fff" : "#121212"}
          backgroundColor={activeTab === text ? "#121212" : "#fff"}
        />
      ))}
    </View>
  );
};

function HeaderButton({
  text,
  textColor,
  backgroundColor,
  setActiveTab,
}: HeaderItemProps) {
  return (
    <Pressable
      style={[{ backgroundColor: backgroundColor }, styles.headerButton]}
      onPress={() => setActiveTab(text)}
    >
      <Text style={[{ color: textColor }, styles.headerButtonText]}>
        {text}
      </Text>
    </Pressable>
  );
}

export default HeaderTabs;
