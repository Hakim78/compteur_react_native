import { Text, StyleSheet } from 'react-native';

interface GreetingProps {
  name: string;
}

export default function Greeting({ name }: GreetingProps) {
  return (
    <Text style={styles.greetingText}>Bienvenue, {name} !</Text>
  );
}

const styles = StyleSheet.create({
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});