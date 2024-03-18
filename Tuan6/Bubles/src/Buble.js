// Bubble.js
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';

const Bubble = ({ duration, size }) => {
  const position = useRef(new Animated.Value(0)).current;

  const animateBubble = () => {
    Animated.timing(position, {
      toValue: 1,
      duration,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      position.setValue(0);
      animateBubble();
    });
  };

  useEffect(() => {
    animateBubble();
  }, []);

  const translateY = position.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -300],
  });

  const opacity = position.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 0],
  });

  return (
    <Animated.View
      style={[
        styles.bubble,
        { transform: [{ translateY }], opacity, width: size, height: size },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    backgroundColor: 'blue',
    borderRadius: 50,
  },
});

export default Bubble;
