import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';

const MainLayout = ({ children, title = 'IncredibleTodoListApp' }) => {
  return (
    <View>
      <Header title={title} />
      <ScrollView>
      {children}
      </ScrollView>
    </View>
  );
};



export default MainLayout;
