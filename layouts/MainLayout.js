import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <View>
      <Header title={"IncredibleTodoListApp"} />
      <ScrollView>
      {children}
      </ScrollView>
      <Footer />
    </View>
  );
};

