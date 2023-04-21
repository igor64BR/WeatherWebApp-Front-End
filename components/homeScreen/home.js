import { Text, View } from "react-native";

export default function Home({ navigation, route }) {
  const { data } = route.params;

  return (
    <View>
      {data.map((user, i) => (
        <View key={i}>
          <Text>{user.Id}</Text>
          <Text>{user.userName}</Text>
          <Text>{user.email}</Text>
        </View>
      ))}
    </View>
  );
}
