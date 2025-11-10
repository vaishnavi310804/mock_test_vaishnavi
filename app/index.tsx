import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";
import List from "@/components/Lists";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Navbar />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Herosection />
          <Search />
          <List />
        </ScrollView>
        <BottomNav />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f0fc",
  },
  wrapper: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
});
