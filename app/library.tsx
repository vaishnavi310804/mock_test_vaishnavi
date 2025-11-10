import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "@/components/Navbar";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Card from "@/components/Card";

const Secondscreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
        <Navbar />
      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
        <Text style={styles.subtitle}>Doctor’s approved audio episodes</Text>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput
          placeholder="Search for symptom or condition..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.tagsContainer}>
        <TouchableOpacity style={styles.tag}>
          <Ionicons name="grid-outline" size={16} color="#0ea5e9" />
          <Text style={styles.tagText}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tag}>
          <Ionicons name="pulse-outline" size={16} color="#0ea5e9" />
          <Text style={styles.tagText}>Symptoms</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tag}>
          <Ionicons name="time-outline" size={16} color="#0ea5e9" />
          <Text style={styles.tagText}>Duration</Text>
        </TouchableOpacity>
      </View>

      <Card/>
    </ScrollView>
  );
};

export default Secondscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f0fc",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0f172a",
  },
  subtitle: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    color: "#333",
  },
  tagsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 1,
  },
  tagText: {
    color: "#0ea5e9",
    fontWeight: "600",
    marginLeft: 6,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    padding: 16,
    marginTop: 18,
    elevation: 2,
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
  },
  cardMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 4,
  },
  metaText: {
    fontSize: 12,
    color: "#6B7280",
  },
  dot: {
    marginHorizontal: 6,
    color: "#6B7280",
  },
  cardSub: {
    fontSize: 13,
    color: "#475569",
    marginTop: 2,
  },
  moreText: {
    fontSize: 13,
    color: "#0ea5e9",
    marginTop: 4,
    fontWeight: "600",
  },
});
