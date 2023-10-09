import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  ScrollView
} from 'react-native';
import Icon from './Custom/Icons';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-reanimated-carousel';
import { DessertArray } from './Stack_Screens/CategoryDessert';
import { DrinkArray } from './Stack_Screens/CategoryDrink';
import { FoodArray } from './Stack_Screens/CategoryFood';
import { SnackArray } from './Stack_Screens/CategorySnack';
import { FavoritePopup } from './CustomComponents';

import { useDispatch, useSelector } from 'react-redux';

import { addFavorite, removeFavorite } from '../Redux/FavSlice';
import { addFavItem, removeFavItem } from '../Redux/FavItemSlice';



// const ProductArray = [
//   {
//     id: 1,
//     name: 'King Hamburger',
//     image: require('../Images/burgerfront.png'),
//     rate: '4.5',
//     price: '19.80',
//   },
//   {
//     id: 2,
//     name: 'Pepsi Drink',
//     image: require('../Images/pepsifront.png'),
//     rate: '4.6',
//     price: '6.50',
//   },
//   {
//     id: 3,
//     name: 'Chicken Burger',
//     image: require('../Images/chickenfront.png'),
//     rate: '4.2',
//     price: '16.20',
//   },
//   {
//     id: 4,
//     name: 'Beaf Burger',
//     image: require('../Images/beafburgerfront.png'),
//     rate: '4.7',
//     price: '22.80',
//   },
//   {
//     id: 5,
//     name: 'Chocolate Cake',
//     image: require('../Images/chococakefront.png'),
//     rate: '4.5',
//     price: '19.80',
//   },
//   {
//     id: 6,
//     name: 'Fried Chicken',
//     image: require('../Images/friedchickenfront.png'),
//     rate: '4.9',
//     price: '10.00',
//   },
//   {
//     id: 7,
//     name: 'Strawberry Cake',
//     image: require('../Images/berrycakefront.png'),
//     rate: '4.5',
//     price: '21.80',
//   },
//   {
//     id: 8,
//     name: 'French Fries',
//     image: require('../Images/friesfront.png'),
//     rate: '4.9',
//     price: '7.80',
//   },
//   {
//     id: 9,
//     name: 'Vanila Cake',
//     image: require('../Images/vanillacakefront.png'),
//     rate: '4.1',
//     price: '9.40',
//   },
//   {
//     id: 10,
//     name: 'Cola Drink',
//     image: require('../Images/colafront.png'),
//     rate: '4.5',
//     price: '6.40',
//   },
// ];

const SliderImages = [
  {
    key: 1,
    image: require('../SlideImages/food1.jpg'),
  },
  {
    key: 2,
    image: require('../SlideImages/food2.jpg'),
  },
  {
    key: 3,
    image: require('../SlideImages/food3.jpg'),
  },
  {
    key: 4,
    image: require('../SlideImages/food4.jpg'),
  },
  {
    key: 5,
    image: require('../SlideImages/food5.jpg'),
  },
];

const { width , height } = Dimensions.get('screen');


const HomeScreen = ({navigation}: any) => {

  const FavoritePost = useSelector( (state: any) => state.favorite_product );
  
  const dispatch = useDispatch();
  const [Popup, setPopup] = useState(false)
  const [Heart, setHeart] = useState([])
  
  
  const FavoriteBtn = (item : any) => {
    setPopup(true) 
    
    if (FavoritePost.includes(item.id)) {
      setPopup(false)
      dispatch(removeFavItem(item))
      dispatch(removeFavorite(item.id))
    }else {
      dispatch(addFavItem(item));
      dispatch(addFavorite(item))
    }
  }

  useEffect( () => {
    if (Popup == true) {
      FavoritePost      
      setTimeout(() => {
        setPopup(false)
      },2000);
    }
  })


  let data1 = FoodArray.slice(0,2)
  let data2 = DrinkArray.slice(0,3)
  let data3 = SnackArray.slice(0,3)
  let data4 = DessertArray.slice(2,4)
  const dataArray = [];
  dataArray.push(...data1,...data2,...data3,...data4)
  
  let numColumns = 2
  let totalRows = Math.floor(dataArray.length / numColumns) // 3
  let LastRow = dataArray.length - (totalRows * numColumns) // 10 - 3 * 3

  while(LastRow !== 0 && LastRow !== numColumns){
    dataArray.push({id: 1,empty: true });
    LastRow++
  }

  
  
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Header Component*/}
      <View style={[styles.header]}>
        <TouchableOpacity style={styles.headerFirstIcon}>
          <Icon
            type={'Ionicons'}
            name={'ios-search'}
            color={'#fff'}
            size={22}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Little Food</Text>
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.navigate("NotifyScreen")}>
          <Icon
            type={'MaterialCommunityIcons'}
            name={'bell'}
            color={'#fff'}
            size={22}
          />
        </TouchableOpacity>
      </View>

      {/* Image Slider 24 26.5 */}
      <View 
        style={{
          alignItems: "center",
          // backgroundColor: 'blue'
        }}
      >
        <Carousel
          loop
          width={width * 0.94}
          height={height / 4}
          autoPlay={true}
          data={SliderImages}
          pagingEnabled={false}
          scrollAnimationDuration={3000}
          renderItem={({item, index}) => (
            <View
              style={{
                paddingVertical: 10,
                marginHorizontal: 10
              }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 14,
                }}
                source={item.image}
                resizeMode={'contain'}
              />
            </View>
          )}
        />
      </View>

      {/* Category 14 20 backgroundColor: "red"*/}
      <View style={{justifyContent: "center",}}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryMainText}>Category</Text>
          <View style={styles.categoryView}>
            <TouchableOpacity style={styles.category} onPress={() => navigation.navigate("Food")}>
              <Image
                source={require('../Images/burger.png')}
                resizeMode="cover"
                style={{height: 50, width: 60,}}
              />
              <Text style={styles.categoryItemText}>Fast Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={() => navigation.navigate("Snack")}>
              <Image
                source={require('../Images/fries.png')}
                resizeMode="cover"
                style={{height: 50, width: 60,}}
              />
              <Text style={styles.categoryItemText}>Snack</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={() => navigation.navigate("Drink")}>
              <Image
                source={require('../Images/drink.png')}
                resizeMode="cover"
                style={{height: 50, width: 60,}}
              />
              <Text style={styles.categoryItemText}>Drink</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={() => navigation.navigate("Dessert")}>
              <Image
                source={require('../Images/cake.png')}
                resizeMode="cover"
                style={{height: 50, width: 60,}}
              />
              <Text style={styles.categoryItemText}>Dessert</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/*Product Items 46 36 backgroundColor: 'yellow' 0.68*/}
      <View style={[styles.productContainer]}>
        <Text style={styles.productMainText}>Popular Food</Text>
        <FlatList
          data={dataArray}
          columnWrapperStyle={{justifyContent: "space-evenly"}}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}: any ) => {
            
            if (item.empty === true) {
              return <View style={{
                width: 166,
                marginBottom: "8%",
                paddingHorizontal:"3%",
              }} />
            }

            return (
              <View style={{}}>
                <TouchableOpacity style={[styles.productItemView, {} ]} onPress={() => navigation.navigate("Details", {ProductItem: item})}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{
                      width: 140,
                      height: 100,
                      marginTop: 30,
                    }}
                  />
                  
                  {
                    FavoritePost.includes(item.id)
                    ?
                    (
                        // {/* Bounce Heart */}
                      <Animatable.View 
                        animation="bounceIn"
                        duration={1300}
                        iterationCount={1}
                        style={styles.productItemFav}
                      >
                        <TouchableOpacity onPress={() => FavoriteBtn(item)}>
                          <Image
                          source={require('../Images/heart5.png')}
                          resizeMode="contain"
                          style={{height: 20,top:6, width: 20}}
                          />
                        </TouchableOpacity>
                      </Animatable.View>
                    )
                    :
                    (
                      // {/* Simple Heart */}
                      <TouchableOpacity style={styles.productItemFav} onPress={() => FavoriteBtn(item)}>
                      <Image
                      source={require('../Images/heart4.png')}
                      resizeMode="contain"
                      style={{height: 20,top:6, width: 20}}
                      />
                      </TouchableOpacity>
                    )
                  }
                  

                    

                  <View style={styles.productItemRating}>
                    <Icon
                      type={'FontAwesome'}
                      name={'star'}
                      color={'#fec200'}
                      size={16}
                      style={{top:2}}
                    />
                    <Text style={styles.productItemRatingText}>
                      {item.rate}
                    </Text>
                  </View>

                    <Text style={styles.productItemNameText}>{item.name}</Text>
                    <View style={{flexDirection: "row",marginTop: "-5%"}}>
                      <Text style={styles.productItemDollarPriceText}>$</Text>
                      <Text style={styles.productItemPriceText}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      {
        Popup == true
        ?
        <FavoritePopup/>
        :
        null
      }


    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Header

  header: {
    flexDirection: 'row',
    backgroundColor: '#161a25',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 50,
    elevation: 7,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: 'orange',
    letterSpacing: 1.5,
    position: 'absolute',
    paddingTop: 3,
    // backgroundColor: "red",
  },
  headerFirstIcon: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 10,
    // backgroundColor: "blue",
  },
  headerIcon: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    // backgroundColor: "blue",
  },


  // Category

  categoryContainer: {
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 4,
    paddingVertical: "1.5%",
    paddingHorizontal: "3%"
  },
  categoryMainText: {
    fontSize: 16,
    color: '#161a25',
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.8,
  },
  categoryView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: "red",
  },
  category: {
    // width: responsiveWidth(18),
    // height: responsiveHeight(8.5),
    // backgroundColor: "pink",
  },
  categoryItemText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: "grey",
    // top: responsiveHeight(0.2),
    // top: 1,
  },

  // Product Items

  productContainer: {
    flex: 1,
    paddingTop: 40,
  },
  productItemView: {
    backgroundColor: '#fff',
    borderRadius: 14,
    elevation: 6,
    alignItems: 'center',
    marginBottom: "8%",
    paddingHorizontal:"3%",
  },
  productItemFav: {
    width: 30,
    height: 30,
    right: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    // backgroundColor: "blue"
  },
  productItemRating: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    left: 4,
    // top: 15,
    position: "absolute",
    padding: 10
    
    // left: 18,
    // top: 15,
    // backgroundColor: "blue",
  },
  productItemRatingText: {
    fontFamily: 'Poppins-Medium',
    paddingLeft: 4,
    color: "grey",
    fontSize: 15
    // paddingLeft: 5,
  },
  productItemNameText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    marginVertical: "5%",
    color: '#161a25',
    // marginTop: 14,
    // fontSize: 15,
  },
  productItemPriceText: {
    fontFamily: 'Poppins-Medium',
    fontSize: height > 800 ? 21 : 19,
    color: '#161a25',
    padding: 5
    // top: hp(.6)
    // top: 4
  },
  productItemDollarPriceText: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#161a25',
    top:4,
    position: 'absolute',
    left: -8,
    // right:2,
    // bottom: 17,
  },
  productMainText: {
    fontSize: 16,
    color: '#161a25',
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.8,
    position: "absolute",
    marginTop: 10,
    left: 30
  }
});



















// console.log("Width:",width);
// console.log("Height:",height);

// 4 inch mobile
// Header		8
// crousel		26.5
// category	20
// foods item	36
// Tab 		9

// 6 inch mobile
// Header		7
// crousel		24
// category	14
// foods item	47
// Tab 		8

// 6 inch mobile
// Width: 411.42857142857144
// Height: 867.4285714285714

// 4.8 inch mobile
// Width: 384
// Height: 640