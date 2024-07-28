import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import ButtonPrimary from "./src/components/buttonPrimary/ButtonPrimary";

import React, { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import CardTask from "./src/components/cardTask/CardTask";
import ModalPrimary from "./src/components/modalPrimary/ModalPrimary";

uuid.v4();

export default function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log("Tasks: ", tasks);
  }, [tasks]);

  const handleVisibleModal = () => {
    setModalVisible(!modalVisible);
  }

  const handleAddTask = () => {
    const newTask = {
      id: uuid.v4(),
      name: taskName,
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Add a task"
            value={taskName}
            onChangeText={setTaskName}
          ></TextInput>
          {/* <InputPrimary></InputPrimary> */}
          <ButtonPrimary
            onPress={handleVisibleModal}
            text="Add task"
          ></ButtonPrimary>
        </View>
        {/*  <ScrollView>
        {tasks.map(task => <CardTask task={task}></CardTask>)}
      </ScrollView> */}
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardTask task={item}></CardTask>}
        />
        {/*  <StatusBar style="auto" /> */}
      </View>
      <ModalPrimary
       text="Confirm to add?"
       visible={modalVisible}
       handleVisibleModal={handleVisibleModal}
       handleModal = {handleAddTask}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  textTitle: {
    color: "#000",
    fontSize: 50,
  },
  containerInput: {
    gap: 20,
    flexDirection: "row",
    width: "95%",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    flex: 2,
    margin: 10,
    paddingStart: 10,
  },
});
