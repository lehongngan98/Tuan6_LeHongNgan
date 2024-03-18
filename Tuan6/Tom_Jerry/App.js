import { StyleSheet, Text, View } from 'react-native';
import TomJerryAnimation from './src/TomJerryAnimation'

export default function App() {
  return (
    <View style={styles.container}>
      <TomJerryAnimation />
    </View>
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
