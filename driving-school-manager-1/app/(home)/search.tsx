import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  const quickActions = [
    { label: "Lessons", icon: <MaterialIcons name="menu-book" size={26} color="#fff" />, bg: "#3498db" },
    { label: "Exams", icon: <FontAwesome5 name="file-alt" size={22} color="#fff" />, bg: "#e67e22" },
    { label: "Results", icon: <MaterialIcons name="grade" size={26} color="#fff" />, bg: "#2ecc71" },
    { label: "Instructor", icon: <Ionicons name="people" size={26} color="#fff" />, bg: "#9b59b6" },
    { label: "Payments", icon: <MaterialIcons name="payment" size={26} color="#fff" />, bg: "#e74c3c" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.username}>John Doe 👋</Text>
        </View>
        <Image
          source={require("@/assets/images/user-image.png")}
          style={styles.avatar}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search lessons, exams..."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Access</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
        {quickActions.map((item, index) => (
          <Pressable key={index} style={[styles.quickAction, { backgroundColor: item.bg }]}>
            {item.icon}
            <Text style={styles.quickActionText}>{item.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Progress Tracker */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Your Progress</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "70%" }]} />
        </View>
        <Text style={styles.progressText}>70% Completed</Text>
      </View>


      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <View style={styles.activityCard}>
        <Text style={styles.activityText}>You have an exam on August 20, 2025 📅</Text>
      </View>
      <View style={styles.activityCard}>
        <Text style={styles.activityText}>Lesson booked with Instructor Sarah ✅</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa", paddingHorizontal: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  greeting: { fontSize: 16, color: "#555" },
  username: { fontSize: 22, fontWeight: "600", color: "#000" },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  progressCard: {
  backgroundColor: "#fff",
  padding: 16,
  borderRadius: 10,
  marginBottom: 20,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 5,
  elevation: 1,
},
progressTitle: { fontSize: 16, fontWeight: "600", marginBottom: 8, color: "#333" },
progressBarBackground: {
  height: 10,
  backgroundColor: "#eaeaea",
  borderRadius: 5,
  overflow: "hidden",
},
progressBarFill: {
  height: "100%",
  backgroundColor: "#3498db",
},
progressText: { marginTop: 6, fontSize: 14, color: "#555" },


  searchInput: { marginLeft: 8, flex: 1, fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10, color: "#333" },
  quickAction: {
    width: 90,
    height: 90,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  quickActionText: { color: "#fff", marginTop: 6, fontSize: 14, fontWeight: "500" },
  activityCard: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  activityText: { fontSize: 15, color: "#555" },
});

export default Profile;
