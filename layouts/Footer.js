import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text>Footer Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    padding: 10,
    backgroundColor: '#eee',
  },
});
