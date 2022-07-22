import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {colors} from './src/theme/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded]=useFonts({
    'Kanit-Bold':require('./assets/fonts/Kanit-Bold.ttf'),
    'Poppin-BoldItalic':require('./assets/fonts/Poppin-BoldItalic.ttf'),
    'JosefinSans-VariableFont_wght':require('./assets/fonts/JosefinSans-VariableFont_wght.ttf')

  });
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>Open up App.js   app! react native </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
