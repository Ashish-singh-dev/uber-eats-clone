import { View, Text, Pressable } from "react-native";
import { styles } from "../../styles/home/headerTabs";
import { useDispatch, useSelector } from "react-redux";

interface HeaderItemProps {
  text: string;
  textColor: string;
  backgroundColor: string;
  setActiveTab: (prop: string) => void;
}

const HeaderTabs = () => {
  const buttons = ["delivery", "pickup"];
  // @ts-ignore
  const activeTab = useSelector((state) => state.activeTabReducer.activeTab);
  const dispatch = useDispatch();
  const setActiveTab = (text: string) => {
    dispatch({
      type: "ACTIVE_TAB",
      payload: text,
    });
  };

  return (
    <View style={styles.container}>
      {buttons.map((text, index) => (
        <HeaderButton
          key={index}
          text={text}
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
