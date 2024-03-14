import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import D41 from './demo1/D41';

export default function App() {
  return (
    <D41/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
