import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text  style={styles.footerText}>Copyright Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  footerText: {
    textAlign: 'center',
    color: '#aaa',
  },
});
