import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import Greeting from '../components/Greeting';

interface UserProfileProps {
  name: string;
  age: number;
}

export default function UserProfile({ name, age }: UserProfileProps) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log('Nombre de likes:', likes);
    
    if (likes > 0 && likes % 5 === 0) {
      console.log('Félicitations ! Vous avez atteint', likes, 'likes !');
    }
  }, [likes]);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const handleReset = () => {
    setLikes(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Greeting name={name} />
        <Text style={styles.infoText}>Âge: {age} ans</Text>
        <Text style={styles.likesText}>Likes: {likes}</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleLike}
          >
            <Text style={styles.buttonText}>Like</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.resetButton]} 
            onPress={handleReset}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  likesText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});