import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("rgb(244, 128, 245)")

  function handleChangeBackground() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    setBackgroundColor(`rgb(${r}, ${g}, ${b})`)
  }


  return (
    <>
      <StatusBar style="auto" />

      <View style={[styles.container, { backgroundColor }]}>
        <Pressable style={styles.pressableBg} onPress={handleChangeBackground}>

          <Text style={styles.text}>Hello there!</Text>

        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  pressableBg: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});
