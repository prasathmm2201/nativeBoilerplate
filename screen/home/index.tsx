import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
  Easing,
  withRepeat,
  withSequence,
  cancelAnimation,
} from 'react-native-reanimated';
import {BOLD} from '../../utils';
import {useEffect} from 'react';

export const Home = () => {
  const opacity = useSharedValue(0);
  const width = useSharedValue(100);
  const height = useSharedValue(100);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      width: width.value,
      height: height.value,
      // transform: [{translateX: withSpring(translateX.value * 2)}],
    };
  }, [opacity.value]);

  const nextNumber = useDerivedValue(() => {
    const next = width.value + 1;
    return next;
  });

  const stop = ()=>{
    cancelAnimation(translateY)
  }

  const increase = () => {
    'worklet';
    width.value += 1;
  };

  const fadeIn = () => {
    'worklet';
    opacity.value = withTiming(1, {duration: 2000, easing: Easing.bounce});
  };

  const onPress = () => {
    'worklet';
    width.value = withSpring(width.value + 30, {duration: 1000});
    height.value = withSpring(width.value + 30, {duration: 1000});
    // translateX.value = translateX.value - 10
    opacity.value = withTiming(opacity.value + 0.5, {duration: 2000});
  };

  const withrepeat = () => {
    'worklet';
    opacity.value = withRepeat(
      withTiming(1, {duration: 1000, easing: Easing.bounce}),
      0,
      false,
    );
  };

  const withsequence = () => {
    'worklet';
    translateY.value = withSequence(
      withTiming(-100, {duration: 1000}),
      withTiming(100, {duration: 1000}),
      withTiming(0, {duration: 1000}),
    );
  };

  useEffect(() => {
    // runOnUI(withrepeat)();
    runOnUI(fadeIn)();
  }, [opacity]);

  return (
    <View style={style.container}>
      <Animated.View style={[style.circle, animatedStyle]}>
        <Pressable onPress={() => runOnUI(onPress)()}>
          <Text style={style.text}>Click Me</Text>
        </Pressable>
      </Animated.View>
      <Button onPress={() => runOnUI(increase)()} title="increase" />
      <Button onPress={() => runOnUI(withsequence)()} title="increase1" />
    </View>
  );
};

const style = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'orange',
    borderRadius: 50,
    fontFamily: BOLD,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: BOLD,
    fontSize: 16,
  },
});
