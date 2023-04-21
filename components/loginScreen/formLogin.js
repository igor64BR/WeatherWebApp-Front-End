import { View } from "react-native-web";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import Input from "../shared/input";
import { useEffect, useState } from "react";

export default function FormLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailIsMissing, setEmailIsMissing] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsMissing, setPasswordIsMissing] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (isMounted) navigation.navigate("Home", { name: "Home", data: data });
    else setIsMounted(true);
  }, [data]);

  const handleSubmit = () => {
    setEmailIsMissing(email ? false : true);
    setPasswordIsMissing(password ? false : true);

    if (!email || !password) return;

    fetch("https://localhost:44397/User")
      .then((response) => response.json())
      .then((json) => setData(json));

    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.body}>
      <Image
        source={require("../../assets/login-img.jpg")}
        style={{ width: "100%", height: "100%" }}
      />
      <View style={styles.inputBody}>
        <Input
          label="Email"
          value={email}
          onChange={setEmail}
          isMissing={emailIsMissing}
        />
        <Input
          label="Password"
          isPassword
          value={password}
          onChange={setPassword}
          isMissing={passwordIsMissing}
        />
        <View style={styles.submitButton}>
          <TouchableOpacity
            onPressIn={handleSubmit}
            style={styles.submitContent}
          >
            <Text style={{ color: "white", fontWeight: 500 }}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",

    height: "100%",
    width: "100%",
  },

  inputBody: {
    display: "flex",
    flexDirection: "column",
    width: "25%",
    height: "100%",

    justifyContent: "center",
    alignContent: "center",

    backgroundColor: "white",

    padding: "5%",
  },

  submitButton: {
    alignItems: "center",
    backgroundColor: "#41424c",
    marginTop: "5%",
    borderRadius: 20,
  },

  submitContent: {
    width: "100%",
    alignItems: "center",
  },
});
