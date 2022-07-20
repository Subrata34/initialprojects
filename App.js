import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {colors} from './src/theme/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>Open up App.js  your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
