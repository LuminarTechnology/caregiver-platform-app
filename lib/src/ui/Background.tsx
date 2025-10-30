import { PropsWithChildren } from "react";
import { View } from "react-native";

const Background = ({ children }: PropsWithChildren) => {
  return (
    <View className="bg-background">
      {children}
    </View>
  );
};


export default Background;
