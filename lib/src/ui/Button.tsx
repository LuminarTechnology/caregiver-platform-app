import { Pressable, Text } from 'react-native';
const Button = () => {
  return (
    <Pressable className="flex h-12 w-full items-center justify-center rounded-lg bg-emerald-500">
      <Text className="text-lg font-semibold text-white">Press Me</Text>
    </Pressable>
  );
};

export default Button;
