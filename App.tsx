import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(7,26,93,255)',
    flex: 1,
  }
});
