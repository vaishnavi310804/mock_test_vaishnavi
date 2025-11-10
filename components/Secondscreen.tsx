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

const Secondscreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
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

      <View style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: "#E8F9F0" }]}>
          <Ionicons size={28} color="#22B07D" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Body Systems</Text>
          <View style={styles.cardMeta}>
            <Text style={styles.metaText}>12 Episodes</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>Updated 3 Jun</Text>
          </View>
          <Text style={styles.cardSub}>How your heart works</Text>
          <Text style={styles.cardSub}>Breathing and the lungs</Text>
          <Text style={styles.moreText}>+ 10 more</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: "#FFF7E6" }]}>
          <Ionicons name="medkit-outline" size={28} color="#F59E0B" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Medical Conditions</Text>
          <View style={styles.cardMeta}>
            <Text style={styles.metaText}>27 Episodes</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>Updated 1 Jun</Text>
          </View>
          <Text style={styles.cardSub}>Managing high blood pressure</Text>
          <Text style={styles.cardSub}>Understanding depression</Text>
          <Text style={styles.moreText}>+ 25 more</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: "#F0EBFF" }]}>
          <Ionicons name="checkmark-done-outline" size={28} color="#7B61FF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Diagnostics</Text>
          <View style={styles.cardMeta}>
            <Text style={styles.metaText}>12 Episodes</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>Updated 29 May</Text>
          </View>
          <Text style={styles.cardSub}>Understanding your ECG report</Text>
          <Text style={styles.cardSub}>What an MRI can tell you</Text>
          <Text style={styles.moreText}>+ 10 more</Text>
        </View>
      </View>
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
