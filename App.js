
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;



