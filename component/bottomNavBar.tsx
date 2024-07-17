import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {BOLD} from '../utils';

interface CustomTabBarProps extends BottomTabBarProps {}

export const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const onPress = ({
    key,
    isFocused,
    name,
  }: {
    key: string;
    isFocused: boolean;
    name: string;
  }) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(name);
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const {tabBarLabel, tabBarIcon} = options;
        const label =
          tabBarLabel !== undefined
            ? typeof tabBarLabel === 'function'
              ? tabBarLabel({
                  focused: state.index === index,
                  color: '#000',
                  position: 'beside-icon',
                  children: '',
                })
              : tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icon = tabBarIcon
          ? tabBarIcon({
              focused: isFocused,
              color: '#000',
              size: 10,
            })
          : null;

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={() =>
              onPress({
                key: route.key,
                isFocused: isFocused,
                name: route.name,
              })
            }
            accessibilityRole="button"
            accessibilityState={{selected: isFocused}}
            accessibilityLabel={options.tabBarAccessibilityLabel}>
            <View style={styles.iconRoot}>
              {icon}
              {isFocused && <View style={styles.indicator} />}
            </View>
            <Text
              style={[styles.labelText, isFocused && styles.focusedLabelText]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: 'white',
    width: '100%',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: '#222',
    marginTop: 4,
    fontFamily: BOLD,
  },
  focusedLabelText: {
    color: '#436bef',
  },
  iconRoot: {
    position: 'relative',
    marginTop: 1,
  },
  indicator: {
    position: 'absolute',
    top: -8,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#436bef',
  },
});
