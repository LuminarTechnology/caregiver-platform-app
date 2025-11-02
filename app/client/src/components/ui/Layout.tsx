import { PropsWithChildren } from "react";
import { View } from "react-native";
import PageHeader from "../common/PageHeader";

type Props = PropsWithChildren<{
  pageTitle: string;
}>;

const Background = ({ children, pageTitle="CareGiver.com" }: Props) => {
  return (
    <View className="flex-1 bg-background">
      <PageHeader title={pageTitle}/>
      {children}
    </View>
  );
};

export default Background;
