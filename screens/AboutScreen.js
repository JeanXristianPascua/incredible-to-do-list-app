import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  const [easterEggTriggered, setEasterEggTriggered] = useState(false);

  const showEasterEgg = () => {
    setEasterEggTriggered(true);
    Alert.alert("Easter Egg", "You found the Easter Egg!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>About the App</Text>
      <TouchableOpacity onPress={showEasterEgg} style={styles.nameContainer}>
        <Text style={styles.normalText}>
          Developed by <Text style={styles.nameText}>Jean Xristian Pascua</Text>
        </Text>
      </TouchableOpacity>
      {easterEggTriggered && <Text style={styles.easterEggText}>Here's a special message for finding the Easter Egg!</Text>}
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  normalText: {
    fontSize: 18,
  },
  nameText: {
    fontWeight: 'bold',
  },
  easterEggText: {
    marginTop: 20,
    color: 'green',
  },
  nameContainer: {
    padding: 10,
  }
});

export default AboutScreen;
