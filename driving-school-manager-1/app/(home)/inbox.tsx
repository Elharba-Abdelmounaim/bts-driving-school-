import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const messagesData = [
  { id: "1", sender: "Admin", text: "Your exam is scheduled tomorrow.", time: "10:30 AM", read: false },
  { id: "2", sender: "Instructor", text: "Lesson rescheduled to next week.", time: "Yesterday", read: true },
  { id: "3", sender: "Support", text: "Your request has been approved.", time: "2 days ago", read: false },
];

const TABS = ["All", "Unread", "Important"];

const Inbox = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filteredMessages = messagesData.filter((msg) => {
    const matchesSearch = msg.text.toLowerCase().includes(search.toLowerCase()) || msg.sender.toLowerCase().includes(search.toLowerCase());
    if (activeTab === "Unread") return matchesSearch && !msg.read;
    if (activeTab === "Important") return matchesSearch && msg.sender === "Admin"; 
    return matchesSearch;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
        <TouchableOpacity>
          <Text style={styles.settings}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search messages..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Tabs */}
      <View style={styles.tabs}>
        {TABS.map((tab) => {
          const count = tab === "Unread" ? messagesData.filter(m => !m.read).length : 0;
          return (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={[styles.tab, activeTab === tab && styles.activeTab]}>
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab} {count > 0 && <Text style={styles.badge}>{count}</Text>}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Messages List */}
      <FlatList
        data={filteredMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageCard}>
            <Image
              source={require("@/assets/images/user-image.png")}
              style={styles.avatar}
            />
            <View style={styles.messageContent}>
              <Text style={[styles.sender, !item.read && styles.unreadSender]}>
                {item.sender}
              </Text>
              <Text numberOfLines={1} style={styles.messageText}>{item.text}</Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.time}>{item.time}</Text>
              {!item.read && <View style={styles.unreadDot} />}
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8f8f8" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  headerTitle: { fontSize: 28, fontWeight: "bold" },
  settings: { fontSize: 24 },
  searchBar: { backgroundColor: "#fff", padding: 10, borderRadius: 8, marginBottom: 16 },
  tabs: { flexDirection: "row", marginBottom: 16 },
  tab: { marginRight: 16, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
  activeTab: { backgroundColor: "#007AFF" },
  tabText: { fontSize: 14, color: "#555" },
  activeTabText: { color: "#fff", fontWeight: "bold" },
  badge: { backgroundColor: "red", color: "#fff", borderRadius: 8, paddingHorizontal: 6, marginLeft: 4, fontSize: 12 },
  messageCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  messageContent: { flex: 1 },
  sender: { fontWeight: "normal", fontSize: 16 },
  unreadSender: { fontWeight: "bold" },
  messageText: { color: "#555" },
  rightSide: { alignItems: "flex-end" },
  time: { fontSize: 12, color: "#999" },
  unreadDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: "red", marginTop: 4 },
});
