import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';

export default function MainLayout({ children, title = 'IncredibleTodoListApp' }) {
  return (
    <View>
      <Header title={title} />
      <ScrollView>
      {children}
      </ScrollView>
    </View>
  );
};

