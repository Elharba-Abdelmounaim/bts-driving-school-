import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { SAMPLE_DATA, FILTERS, DrivingVehicleProps } from "@/constants/data";

const Home = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredVehicles = SAMPLE_DATA.filter((vehicle) => {
    const matchesSearch =
      vehicle.vehicleName.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.school.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = activeFilter ? vehicle.type === activeFilter : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.searchLabel}>Where to learn?</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="City • School • Vehicle Type"
              placeholderTextColor="#999"
              value={search}
              onChangeText={setSearch}
            />
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Feather name="search" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filters */}
      <View style={styles.filterWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.filterItem,
                  activeFilter === filter.label && styles.activeFilterItem,
                ]}
                onPress={() =>
                  setActiveFilter(activeFilter === filter.label ? null : filter.label)
                }
              >
                <Image source={filter.image} style={styles.filterImage} />
                <Text style={styles.filterLabel}>{filter.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Vehicle List */}
      <FlatList
        data={filteredVehicles}
        keyExtractor={(item) => item.vehicleName}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.vehicleCard}>
            <Image source={item.image} style={styles.vehicleImage} />
            <View style={styles.vehicleContent}>
              <Text style={styles.vehicleName}>{item.vehicleName}</Text>
              <Text style={styles.vehicleSchool}>{item.school}</Text>
              <Text style={styles.vehicleType}>{item.type}</Text>
              <View style={styles.priceRateWrapper}>
                <Text style={styles.vehiclePrice}>
                  {item.currency} {item.pricePerHour}/hr
                </Text>
                <Text style={styles.vehicleRate}>⭐ {item.rate}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.favoriteButton}>
              <Feather
                name={item.favorite ? "heart" : "heart"}
                size={22}
                color={item.favorite ? "red" : "#999"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  searchWrapper: { padding: 15, backgroundColor: "white" },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  inputContainer: { flex: 1 },
  searchLabel: { fontSize: 14, fontWeight: "600", color: "#333" },
  searchInput: { fontSize: 14, paddingVertical: 2, color: "#333" },
  searchButton: {
    backgroundColor: "#ff5a5f",
    borderRadius: 50,
    padding: 10,
    marginLeft: 8,
  },
  filterWrapper: { backgroundColor: "white", paddingVertical: 10 },
  filterGroup: { flexDirection: "row", paddingHorizontal: 10 },
  filterItem: { alignItems: "center", marginHorizontal: 8 },
  activeFilterItem: { borderColor: "#ff5a5f", borderWidth: 2, borderRadius: 35 },
  filterImage: { width: 55, height: 55, borderRadius: 30, marginBottom: 5 },
  filterLabel: { fontSize: 12, color: "#333", textAlign: "center" },
  vehicleCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    padding: 10,
    alignItems: "center",
  },
  vehicleImage: { width: 100, height: 100, borderRadius: 12 },
  vehicleContent: { flex: 1, paddingHorizontal: 10 },
  vehicleName: { fontSize: 16, fontWeight: "bold", marginBottom: 2 },
  vehicleSchool: { fontSize: 14, color: "#555" },
  vehicleType: { fontSize: 12, color: "#999", marginBottom: 4 },
  priceRateWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  vehiclePrice: { fontSize: 14, fontWeight: "600", color: "#333" },
  vehicleRate: { fontSize: 12, color: "#999" },
  favoriteButton: { position: "absolute", top: 10, right: 50, paddingEnd:20 },
  bookButton: { position: "absolute", top: 10, right: 10, backgroundColor: "#ff5a5f", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  bookButtonText: { color: "white", fontWeight: "600", fontSize: 12 },
});
