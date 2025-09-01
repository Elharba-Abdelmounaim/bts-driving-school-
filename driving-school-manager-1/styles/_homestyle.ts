import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

 
  searchGroup: {
    padding: 15,
    backgroundColor: "#27ae60", // الأخضر العلوي
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    marginTop:20,
    paddingHorizontal: 17,
    paddingVertical: 4,
  },
  searchControlGroup: {
    flex: 1,
    
  },
  searchControl: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#ffa500", // لون زر البحث (برتقالي)
    padding: 10,
    borderRadius: 30,
    marginLeft: 10,
  },

 searchFormText:{
    marginTop:15,
    fontSize:17,
 },



  // 🏷️ الفلاتر العلوية (منازل - ريف - فيلا ...)
  filterGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 1,
  },
  filterContainer: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  filterIcon: {
    width: 30,
    height: 30,
    marginBottom: 4,
  },
  filterLabel: {
    fontSize: 12,
    color: "#444",
  },

  // 🏠 عناصر العقارات
  listingContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
  },
  discountTag: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#2ecc71",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 20,
    elevation: 2,
  },
  cardBody: {
    padding: 12,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  ratingText: {
    marginLeft: 4,
    color: "#f39c12",
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  location: {
    fontSize: 13,
    color: "#888",
  },
  priceTag: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 2,
  },
  priceText: {
    fontWeight: "bold",
    color: "#000",
  },

  // 🔽 زر "عرض المزيد"
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#27ae60",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
  },
});
