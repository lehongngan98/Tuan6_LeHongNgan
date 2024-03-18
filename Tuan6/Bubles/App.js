import { StyleSheet, View} from 'react-native';
import Bubble  from './src/Buble'

export default function App() {
  return (
    <View style={styles.container}>
    <Bubble duration={3000} size={50} />
    <Bubble duration={5000} size={25} />
    <Bubble duration={2000} size={20} />
    <Bubble duration={6000} size={35} />
    <Bubble duration={8000} size={70} />
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
