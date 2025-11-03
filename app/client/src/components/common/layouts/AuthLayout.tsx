import { PropsWithChildren } from "react";
import { View } from "react-native";
import PageHeader from "../PageHeader";

type Props = PropsWithChildren<{
  pageTitle: string;
}>;

const AuthLayout = ({ children, pageTitle="CareGiver.com" }: Props) => {
  return (
    <View className="flex-1 bg-background">
      <PageHeader title={pageTitle}/>
      {children}
    </View>
  );
};

export default AuthLayout;
