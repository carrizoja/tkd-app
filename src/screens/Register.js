import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import InputForm from "../components/InputForm";
import { colors } from "../global/colors";
import { useRegisterMutation } from "../services/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { registerSchema } from "../validations/registerSchema";
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [triggerRegister, { data, isSuccess, isError }] = useRegisterMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if(isError) {
      setEmailError("El email ya está registrado");
    }
  }
  , [isError]);

  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password, confirmPassword });
      const { data } = await triggerRegister({ email, password });
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
    } catch (error) {
      console.log(error.path), console.log(error.message);
      switch (error.path) {
        case "email":
          setEmailError(error.message);
          setPasswordError("");
          setConfirmPasswordError("");
          break;
        case "password":
          setPasswordError(error.message);
          setEmailError("");
          setConfirmPasswordError("");
          break;
        case "confirmPassword":
          setConfirmPasswordError(error.message);
          setEmailError("");
          setPasswordError("");
          break;
        default:
          break;
    }
  };
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />
        <InputForm
          label="Confirmar Password"
          value={confirmPassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={confirmPasswordError}
        />
        <SubmitButton onPress={onSubmit} title="Registrarme" />
        <Text style={styles.sub}>¿Ya tenés una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Iniciar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

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
    color: colors.primary,
    textAlign: "center",
  },
});
