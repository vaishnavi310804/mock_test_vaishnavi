import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const List= () => {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Doctor-curated playlists</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox1}>
          <Ionicons name="bandage" size={22} color="#7B61FF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Chronic Pain</Text>
          <Text style={styles.cardSub}>8 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox2}>
          <Ionicons name="moon" size={22} color="#F472B6" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Mindfulness for Sleep</Text>
          <Text style={styles.cardSub}>8 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox3}>
          <Ionicons name="heart-circle" size={22} color="#FF6B6B" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Health Heart Basics</Text>
          <Text style={styles.cardSub}>12 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox4}>
          <Ionicons name="fitness-outline" size={22} color="#22B07D" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Fitness Routine</Text>
          <Text style={styles.cardSub}>6 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox2}>
          <Ionicons name="leaf-outline" size={22} color="#F472B6" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Healthy Living</Text>
          <Text style={styles.cardSub}>10 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox1}>
          <Ionicons name="water-outline" size={22} color="#7B61FF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Hydration Tips</Text>
          <Text style={styles.cardSub}>7 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>
    </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#e4f0fc",
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#272b32ff",
  },
  seeAll: {
    color: "#007AFF",
    fontWeight: "500",
    fontSize: 14,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 14,
    padding: 12,
    marginTop: 10,
  },
  iconBox1: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#EDEBFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  iconBox2: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#FDE7F3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  iconBox3: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#FFECEC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  iconBox4: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#E8F9F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#111827",
    fontSize: 15,
  },
  cardSub: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
});
