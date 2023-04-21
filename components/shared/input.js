import { View, Text } from "react-native-web";
import { StyleSheet, TextInput } from "react-native";

export default function Input({
  label,
  isPassword,
  style,
  value,
  onChange,
  isMissing,
}) {
  const textInputStyle = isMissing
    ? StyleSheet.compose(styles.textInput, styles.missingField)
    : styles.textInput;

  return (
    <View style={StyleSheet.compose(styles.body, style)}>
      <Text>{label}</Text>
      <TextInput
        secureTextEntry={isPassword}
        style={textInputStyle}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
  },

  textInput: {
    backgroundColor: "lightgray",
    borderRadius: 20,
    marginBottom: "2%",
  },

  missingField: {
    borderColor: "red",
    borderWidth: 1,
  },
});
