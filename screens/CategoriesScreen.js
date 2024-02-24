import { FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data.js";
import CategoryGridTitle from "../components/CategoryGridTitle.js";


export default function CategoriesScreen({navigation}) {

  function renderCategoryItem(itemData) {
    function pressHandler(){
     navigation.navigate('MealsOverview', {
      categoryId: itemData.item.id
     })
    }


  return (
    <CategoryGridTitle
    title={itemData.item.title}
    color={itemData.item.color}
    onPressed={pressHandler}
  />
  );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}