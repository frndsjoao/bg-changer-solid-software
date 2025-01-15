import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function App() {
  const [currentColor, setCurrentColor] = useState("rgb(244, 128, 245)")
  const sharedBgColor = useSharedValue("rgb(244, 128, 245)")

  function generateColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return { r, g, b }
  }

  function handleChangeBackground() {
    const newColor = generateColor()
    setCurrentColor(`rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`)
    sharedBgColor.value = withTiming(`rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`, { duration: 300 })
  }

  const animatedBackground = useAnimatedStyle(() => {
    return { backgroundColor: sharedBgColor.value }
  })

  return (
    <>
      <StatusBar style="auto" />

      <Animated.View style={[styles.container, animatedBackground]}>
        <Pressable style={styles.touchableBg} onPress={handleChangeBackground}>

          <Text style={styles.text}>Hello there!</Text>
          <Text style={styles.label}>{currentColor}</Text>

        </Pressable>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  label: {
    fontSize: 16,
    letterSpacing: 1,
    color: 'rgb(70, 70, 70)',
    marginVertical: 10,
  },
  touchableBg: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});
