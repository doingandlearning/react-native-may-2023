import {
  Button,
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";

export default function CustomModal() {
  // React 16.7 Hooks
  // useState
  const [showModal, setShowModal] = React.useState(false);

  const names = ["Paul", "Tautvydas", "Tony", "Dom", "Mike"];

  // array destructuring!
  const [, , seniorDev] = names;

  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    async function asyncFunction() {
      console.log("I've been invoked");
      // await
    }
    asyncFunction();
    return () => console.log("I've cleaned");
  }, [count]);

  // useEffect
  return (
    <>
      <Text>Show modal? {String(showModal)} </Text>
      <Button
        title="Show modal"
        onPress={() => setShowModal(!showModal)}
      ></Button>
      <Image
        style={{ width: 66, height: 58 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>{count}</Text>
      </TouchableOpacity>
      <Modal
        visible={showModal}
        animationType="fade" // none/slide/fade
        onRequestClose={() => setShowModal(false)}
        // transparent={true}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={styles.modalButton}
          >
            <Text style={{ color: "white" }}>x</Text>
          </TouchableOpacity>
          <Text>Keeping Signed In</Text>
          <Text>
            Choosing "Keep me signed in" reduces the number of times you're
            asked to Sign-In on this device. To keep your account secure, use
            this option only on your personal devices.
          </Text>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    backgroundColor: "#2196f3",

    borderRadius: 20,
    padding: 10,
    alignSelf: "flex-end",
    marginRight: 10,
  },
});
