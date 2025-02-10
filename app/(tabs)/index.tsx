import { View, StyleSheet } from 'react-native';
import UserProfile from '../../screens/UserProfile';

export default function Page() {
  return (
    <View style={styles.container}>
      <UserProfile name="John Doe" age={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
});