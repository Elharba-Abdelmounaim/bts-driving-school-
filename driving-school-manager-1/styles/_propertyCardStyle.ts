import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      height: 400,
      borderRadius: 10,
      overflow: "hidden",
      marginBottom: 16,
    },
    overlay: {
      height: 400,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 16,
      justifyContent: "space-between",
    },
    favoriteGroup: {
      alignItems: "flex-end",
    },
    favoriteOverlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    rateGroup: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 5,
    },
    rateText: {
      fontSize: 20,
      color: "#fff",
      fontWeight: 500,
      marginLeft: 4,
    },
    priceGroup: {
      backgroundColor: "#F9F9F9",
      width: 104,
      height: 45,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    priceText: {
      fontSize: 17,
      fontWeight: 500,
    },
    cardTextGroup: {
      width: 205,
    },
    cardLargeText: {
      fontSize: 30,
      fontWeight: 600,
      color: "#fff",
    },
    cardSmallText: {
      fontSize: 15,
      fontWeight: 400,
      color: "#fff",
    },
    cardGroup: {
      flexDirection: "row",
      columnGap: 40,
      alignItems: "center",
    },
    group: {
      position: "absolute",
      bottom: 30,
      left: 30,
    },
  });

  export { styles };
