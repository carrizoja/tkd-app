import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        source={require('./assets/logo.png')}
      ></Image>  
      <Text style={styles.textTitle}>TKD App</Text>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  textTitle: {
    color: '#000',
    fontSize: 50,
  },
});
