import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Tab = "Home" | "Library" | "Playlists" | "Profile";

type Props = {
  activeTab?: Tab;                 
  onTabPress?: (tab: Tab) => void;  
};

const tabs = [
  { key: "Home", label: "Home", icon: "home" },
  { key: "Library", label: "Library", icon: "folder" },
  { key: "Playlists", label: "Playlists", icon: "mic" },
  { key: "Profile", label: "Profile", icon: "person" },
] as const;

export default function BottomNav({
  activeTab = "Home",
  onTabPress,
}: Props) {
  return (
    <View style={styles.container}>
      {tabs.map((item) => {
        const isActive = item.key === activeTab;

        return (
          <TouchableOpacity
            key={item.key}
            style={styles.tab}
            activeOpacity={0.8}
            onPress={() => onTabPress && onTabPress(item.key)}
          >
            <Ionicons
              name={item.icon}
              size={22}
              color={isActive ? "#111" : "#9CA3AF"}
            />

            <Text
              style={[
                styles.label,
                { color: isActive ? "#111" : "#9CA3AF" },
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 10,
  },

  tab: {
    alignItems: "center",
    gap: 4,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
  },
});