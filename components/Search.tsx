import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput
          placeholder="Search for symptom or condition..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.tagsContainer}>
        <View style={styles.tagAsthma}>
          <View style={styles.dotAsthma} />
          <Text style={styles.textAsthma}>Asthma</Text>
        </View>

        <View style={styles.tagChest}>
          <View style={styles.dotChest} />
          <Text style={styles.textChest}>Chest pain</Text>
        </View>

        <View style={styles.tagHeart}>
          <View style={styles.dotHeart} />
          <Text style={styles.textHeart}>Heart diseases</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Browse by category</Text>

      <View style={styles.categories}>
        <View style={styles.categoryBody}>
          <FontAwesome6 name="lungs" size={32} color="#22B07D" />
          <Text style={styles.categoryText}>Body</Text>
        </View>

        <View style={styles.categorySymptoms}>
          <FontAwesome name="heartbeat" size={32} color="#FF6B6B" />
          <Text style={styles.categoryText}>Symptoms</Text>
        </View>

        <View style={styles.categoryTreatment}>
          <Ionicons name="medkit-outline" size={32} color="#7B61FF" />
          <Text style={styles.categoryText}>Treatment</Text>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginHorizontal: 16,
    marginTop: 20,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#F5F7FA",
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: "center",
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    color: "#333",
  },
  tagsContainer: {
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
    gap: 8,
  },
  tagAsthma: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F9F0",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textAsthma: {
    fontSize: 13,
    fontWeight: "500",
    color:"black",
  },
  dotAsthma: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
    backgroundColor: "#22B07D",
  },
  tagChest: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF7E6",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textChest: {
    fontSize: 13,
    fontWeight: "500",
    color:"black",
  },
  dotChest: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
    backgroundColor: "#FFB100",
  },
  tagHeart: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFECEC",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textHeart: {
    fontSize: 13,
    fontWeight: "500",
    color:"black",
  },
  dotHeart: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
    backgroundColor: "#FF6B6B",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 22,
    marginBottom: 10,
    color: "#111827",
  },
  categories: {
    marginTop:10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryBody: {
    width: "30%",
    alignItems: "center",
    borderRadius: 14,
    paddingVertical: 16,
    backgroundColor: "#E8F9F0",
  },
  categorySymptoms: {
    width: "30%",
    alignItems: "center",
    borderRadius: 14,
    paddingVertical: 16,
    backgroundColor: "#FFECEC",
  },
  categoryTreatment: {
    width: "30%",
    alignItems: "center",
    borderRadius: 14,
    paddingVertical: 16,
    backgroundColor: "#F0EBFF",
  },
  categoryText: {
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
    color: "#111827",
  },
});