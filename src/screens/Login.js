import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useLoginMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { loginSchema } from "../validations/loginSchema";
import { setUser } from "../features/auth/authSlice";
import { insertSession } from "../db";
const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [triggerLogin, {isError}] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if(isError) {
      setEmailError("Email o contraseña incorrectos");
      setPasswordError("Email o contraseña incorrectos");
    }
  }
  , [isError]);


  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const { data } = await triggerLogin({ email, password });
      insertSession(data);
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
    } catch (error) {
      switch (error.path) {
        case "email":
          setEmailError(error.message);
          setPasswordError("");
          break;
        case "password":
          setPasswordError(error.message);
          setEmailError("");
          break;
        default:
          break;
      }
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          error={emailError}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />
        <SubmitButton title="Iniciar sesion" onPress={onSubmit} />
        <Text style={styles.sub}>¿No tenés una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.subLink}>Registrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
  },
  sub: {
    marginTop: 16,
    textAlign: "center",
  },
  subLink: {
    color: "blue",
    textAlign: "center",
  },
});
