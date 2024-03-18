// TomJerryAnimation.js
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const TomJerryAnimation = () => {
  const tomPosition = useRef(new Animated.Value(0)).current;
  const jerryPosition = useRef(new Animated.Value(0)).current;

  const tomRun = () => {
    Animated.timing(tomPosition, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      tomPosition.setValue(0);
      tomRun();
    });
  };

  const jerryRun = () => {
    Animated.timing(jerryPosition, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      jerryPosition.setValue(0);
      jerryRun();
    });
  };

  useEffect(() => {
    tomRun();
    jerryRun();
  }, []);

  const tomTranslateX = tomPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Tom chạy từ trái sang phải
  });

  const jerryTranslateY = jerryPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Jerry chạy từ trên xuống dưới
  });

  // Kiểm tra điều kiện gặp nhau và dừng lại
  useEffect(() => {
    if (tomPosition._value === 1 && jerryPosition._value === 1) {
      // Dừng lại khi gặp nhau
      Animated.timing(tomPosition).stop();
      Animated.timing(jerryPosition).stop();
    }
  }, [tomPosition, jerryPosition]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.tom, { transform: [{ translateX: tomTranslateX }] }]} />
      <Animated.View style={[styles.jerry, { transform: [{ translateY: jerryTranslateY }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tom: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  jerry: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});

export default TomJerryAnimation;
