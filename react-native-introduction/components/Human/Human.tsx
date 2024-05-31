import { Text } from "react-native";

export function Human(props: any) {
  console.log(props);
  return <Text>Je suis un humain, ${props.firstName}</Text>;
}
