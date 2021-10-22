import React from "react";
import { FlatList, Text, View, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars.js";
import CarItem from "../CarItem";

const Carlist = () => {
  return (
    <View>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={"false"}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default Carlist;
