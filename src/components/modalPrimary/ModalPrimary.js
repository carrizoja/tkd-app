import { StyleSheet, Text, View, Modal } from "react-native";
import ButtonPrimary from "../buttonPrimary/ButtonPrimary";
const ModalPrimary = ({text, visible, handleVisibleModal, handleModal}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>{text}</Text>
            <View style={styles.buttonContainer}>
                <ButtonPrimary onPress={handleModal} text="Yes"></ButtonPrimary>
                <ButtonPrimary onPress={handleVisibleModal} text="No"></ButtonPrimary>
            </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPrimary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.9,
    },
    content: {
        width: "80%",
        height: 300,
        backgroundColor: "white",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        color: "black",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
});
