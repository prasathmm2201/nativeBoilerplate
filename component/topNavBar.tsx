import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BOLD} from '../utils';

export const CustomHeader = ({title}: {title: string}) => (
  <View style={styles?.container}>
    <Text style={styles?.labelText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  labelText: {
    color: '#222',
    marginTop: 4,
    fontFamily: BOLD,
  },
});
