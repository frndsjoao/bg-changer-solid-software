import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <View style={[styles.container]}>
        <Pressable style={styles.pressableBg}>

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
    backgroundColor: "rgb(244, 128, 245)"
  },
});
