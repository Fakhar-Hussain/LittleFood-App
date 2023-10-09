import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from '../Custom/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Redux/FavSlice';
import { addFavItem, removeFavItem } from '../../Redux/FavItemSlice';
import { FavoritePopup } from '../CustomComponents';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('screen');

export const FoodArray = [
  {
    id: 21,
    name: 'Chicken Burger',
    image: require('../../Images/Burger/burger1.png'),
    rate: '4.5',
    price: '16.80',
    qty: 1,
  },
  {
    id: 22,
    name: 'Mayo Burger',
    image: require('../../Images/Burger/burger2.png'),
    rate: '4.7',
    price: '11.00',
    qty: 1,
  },
  {
    id: 23,
    name: 'Chicken Mayo',
    image: require('../../Images/Burger/burger3.png'),
    rate: '4.2',
    price: '14.20',
    qty: 1,
  },
  {
    id: 24,
    name: 'Kabab Burger',
    image: require('../../Images/Burger/burger9.png'),
    rate: '4.7',
    price: '22.80',
    qty: 1,
  },
  {
    id: 25,
    name: 'Mayo Burger',
    image: require('../../Images/Burger/burger5.png'),
    rate: '4.5',
    price: '19.80',
    qty: 1,
  },
  {
    id: 26,
    name: 'Spicy Burger',
    image: require('../../Images/Burger/burger10.png'),
    rate: '4.9',
    price: '28.00',
    qty: 1,
  },
  {
    id: 27,
    name: 'Beaf Burger',
    image: require('../../Images/Burger/burger7.png'),
    rate: '4.7',
    price: '22.80',
    qty: 1,
  },
  {
    id: 28,
    name: 'Chicken Burger',
    image: require('../../Images/Burger/burger8.png'),
    rate: '4.2',
    price: '16.20',
    qty: 1,
  },
];

const Food = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [Popup, setPopup] = useState(false)
  const FavoritePost = useSelector( (state: any) => state.favorite_product );

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
  
  return (
    <View style={styles.container}>
      {/* Header Component*/}
      <View style={[styles.header]}>
        <TouchableOpacity
          style={styles.headerFirstIcon}
          onPress={() => navigation.goBack()}>
          <Icon
            type={'Ionicons'}
            name={'ios-arrow-back'}
            color={'#fff'}
            size={26}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Fast Food</Text>
      </View>

      {/* Products */}
      <View style={[styles.productContainer]}>
        <FlatList
          data={FoodArray}
          numColumns={2}
          columnWrapperStyle={{justifyContent: "space-evenly"}}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  style={styles.productItemView}
                  onPress={() => navigation.navigate('Details', {ProductItem: item})}>
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
                          source={require('../../Images/heart5.png')}
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
                      source={require('../../Images/heart4.png')}
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
                      style={{top: 2}}
                    />
                    <Text style={styles.productItemRatingText}>
                      {item.rate}
                    </Text>
                  </View>

                  <Text style={styles.productItemNameText}>{item.name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.productItemDollarPriceText}>$</Text>
                    <Text style={styles.productItemPriceText}>
                      {item.price}
                    </Text>
                  </View>
                  {/* <View style={{marginBottom: 22}}/> */}
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

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: "center"
  },

  // Header
  header: {
    flexDirection: 'row',
    backgroundColor: '#161a25',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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

  // Product Items

  productContainer: {
    flex: 1,
  },
  productItemView: {
    backgroundColor: '#fff',
    borderRadius: 14,
    elevation: 6,
    alignItems: 'center',
    marginVertical: '6%',
    paddingHorizontal: '3%',
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
    position: 'absolute',
    padding: 10,

    // left: 18,
    // top: 15,
    // backgroundColor: "blue",
  },
  productItemRatingText: {
    fontFamily: 'Poppins-Medium',
    paddingLeft: 4,
    color: 'grey',
    fontSize: 15,
    // paddingLeft: 5,
  },
  productItemNameText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: '10%',
    color: '#161a25',
    // backgroundColor: "red",
    width: 140,
    textAlign: 'center',
    // marginTop: 14,
    // fontSize: 15,
  },
  productItemPriceText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#161a25',
    padding: 5,
    // backgroundColor: "blue"
    // top: hp(.6)
    // top: 4
  },
  productItemDollarPriceText: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#161a25',
    top: 4,
    // right:2,
    position: 'absolute',
    // bottom: 17,
    left: -8,
  },
  productMainText: {
    fontSize: 16,
    color: '#161a25',
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.8,
    position: 'absolute',
    marginTop: 10,
    left: 30,
    // marginLeft: 15,

    // alignSelf: "flex-start",
    // padding: 30,
    // backgroundColor: "blue",
    // paddingLeft: 16,
    // width: "92%",
    // left: responsiveWidth(8),
    // left: 18,
    // height: height > 800 ? 35 : 28,
    // padding: 5,
    // marginTop: 17,
    // paddingTop: 17,
    // paddingBottom: 6
    // top: 6,
  },
});
