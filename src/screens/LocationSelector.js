import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapPreview from "../components/MapPreview";
import { mapStaticApi } from "../firebase/googleAPI";
import SubmitButton from "../components/SubmitButton";
import { usePostUserLocationMutation } from "../services/users";
import { useSelector } from "react-redux";
const LocationSelector = ({navigation}) => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
 
  });

  const [address, setAddress] = useState("");
  const localId = useSelector((state) => state.auth.localId);
  const [triggerPostUserLocation] = usePostUserLocationMutation();
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const newLocation = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: newLocation.coords.latitude,
        longitude: newLocation.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (location.latitude) {
        const urlReverseGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${mapStaticApi}`;

      const response = await fetch(urlReverseGeocoding);
      const data = await response.json();
      setAddress(data.results[0].formatted_address);
      }
    })();
  }, [location]);

  const handleConfirmLocation = () => {
    const userLocation = {
        ...location,
        address,
        };
    triggerPostUserLocation({localId, userLocation});
    navigation.navigate("MyProfile");
  };

  return (
    <View style={styles.container}>
      <Text>
       Dirección: {address}
      </Text>
      <MapPreview location={location} />
      <SubmitButton title="Confirmar ubicación" onPress={handleConfirmLocation} />
    </View>
  );

};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
