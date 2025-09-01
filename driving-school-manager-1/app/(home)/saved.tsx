import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";

const savedItems = [
  { id: "1", title: "Important Message", sender: "Admin", time: "10:30 AM" },
  { id: "2", title: "Lesson Notes", sender: "Instructor", time: "Yesterday" },
  { id: "3", title: "Project Guidelines", sender: "Support", time: "2 days ago" },
];

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Items</Text>

      <FlatList
        data={savedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image
              source={require("@/assets/images/user-image.png")}
              style={styles.avatar}
            />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.sender}>From: {item.sender}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8f8f8" },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  content: { flex: 1 },
  title: { fontSize: 16, fontWeight: "bold" },
  sender: { color: "#555", marginTop: 4 },
  time: { fontSize: 12, color: "#999" },
});
