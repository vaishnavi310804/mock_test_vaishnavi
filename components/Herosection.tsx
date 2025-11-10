import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Hero = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Understand medical</Text>
      <Text style={styles.title1}>conditions with</Text>
      <Text style={styles.subtitle}>doctor-approved audio</Text>

      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.buttonText}>Browse Library</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e4f0fc",
    // alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    textAlign: "left",
    lineHeight: 30,
  },
  title1:{
    marginTop:10,
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    textAlign: "left",
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0ea5e9",
    textAlign: "left",
    marginTop: 10,
    lineHeight: 30,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 25,
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    width:'100%',
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
