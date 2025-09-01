import { View, Text, StyleSheet, ImageBackground } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PropertyListingProps } from "@/interfaces";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "@/styles/_propertyCardStyle";

const PropertyListingCard: React.FC<PropertyListingProps> = ({
  propertyName,
  rate,
  currency,
  amount,
  location,
  favorite,
  image,
}) => {
  return (
    <ImageBackground
      source={image} style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.favoriteGroup}>
          <View style={styles.favoriteOverlay}>
            {favorite ? (
              <FontAwesome name="heart" size={24} color="#E50000" />
            ) : (
              <EvilIcons name="heart" size={32} color="white" />
            )}
          </View>
        </View>

        <View style={styles.group}>
          <View style={styles.rateGroup}>
            <MaterialIcons name="star-rate" size={40} color="#FAC02B" />
            <Text style={styles.rateText}>{rate}</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardTextGroup}>
              <Text style={styles.cardLargeText}>{propertyName}</Text>
              <Text style={styles.cardSmallText}>
                {location.street}, {location.city}, {location.country}
              </Text>
            </View>
            <View style={styles.priceGroup}>
              <Text style={styles.priceText}>
                {currency}
                {amount}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PropertyListingCard;