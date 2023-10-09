import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from './Custom/Icons';
import {useDispatch, useSelector,} from 'react-redux';
import { removeFavorite } from '../Redux/FavSlice';
import { removeFavItem } from '../Redux/FavItemSlice';

const {width, height} = Dimensions.get('screen');

const FavScreen = ({navigation}: any) => {
  let dispatch = useDispatch();
  let favorite_list = useSelector((state: any) => state.favorite);
  const FavoritePost = useSelector( (state: any) => state.favorite_product );

  const dataArray = [];
  dataArray.push(...favorite_list)

  let numColumns = 2
  let totalRows = Math.floor(dataArray.length / numColumns)
  let totalLastRows = dataArray.length - (totalRows * numColumns)

  

  while(totalLastRows !== 0 && totalLastRows !== numColumns){
    dataArray.push({id: 1,empty: true });
    totalLastRows++
  }

  const DeleteFavorite = (item: any) => {
    console.log(item);
    dispatch(removeFavorite(item.id))
    dispatch(removeFavItem(item))
  }

  return (
    <View style={styles.container}>
      {/* Header Component*/}
      <View style={[styles.header]}>
        <Text style={styles.headerText}>Favorites</Text>
      </View>

      {favorite_list == "" ? (
        <View style={styles.emptyScreenView}>
          <Image
            source={require('../Images/heart.png')}
            resizeMode="contain"
            style={styles.emptyScreenImage}
          />
          <Text style={styles.emptyScreenMainText}>No Favorites Yet!</Text>
          <Text style={styles.emptyScreenText}>
            Any item you favorite will appear here
          </Text>
        </View>
      ) : (
        <View style={styles.productContainer}>
          <FlatList
            data={dataArray}
            columnWrapperStyle={{justifyContent: 'space-evenly'}}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              
              if (item.empty === true) {
                return <View style={{
                  width: 166,
                  marginBottom: "8%",
                  paddingHorizontal:"3%",
                }} />
              }

              return (
                <View style={{}}>
                  <TouchableOpacity
                    style={[styles.productItemView, {}]}
                    onPress={() =>
                      navigation.navigate('Details', {ProductItem: item})
                    }>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{
                        width: 140,
                        height: 100,
                        marginTop: 30,
                      }}
                    />

                    <TouchableOpacity
                      style={styles.productItemFav}
                      onPress={() => DeleteFavorite(item)}
                    >
                      <Icon 
                        name={"cross"}
                        type={"Entypo"}
                        size={24}
                        color={"red"}

                      />
                    </TouchableOpacity>

                    <View style={styles.productItemRating}>
                      <Icon
                        type={'FontAwesome'}
                        name={'star'}
                        color={'#fec200'}
                        size={16}
                        style={{top: 2}}
                      />
                      {/* {item.rate} {item.name} {item.price} */}
                      <Text style={styles.productItemRatingText}>
                        {item.rate}
                      </Text>
                    </View>

                    <Text style={styles.productItemNameText}>{item.name}</Text>
                    {
                      // height < 700
                      // ?
                      // null
                      // :
                      <View style={{flexDirection: 'row', marginTop: '-5%'}}>
                        <Text style={styles.productItemDollarPriceText}>$</Text>
                        <Text style={styles.productItemPriceText}>
                          {item.price}
                        </Text>
                      </View>
                    }
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      )}

      {/* Product Fav Item  */}
    </View>
  );
};

export default FavScreen;

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

  // Empty Screen
  emptyScreenView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyScreenImage: {
    height: '40%',
    width: '70%',
    marginTop: -100,
    // backgroundColor: "red"
  },
  emptyScreenMainText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#161a25',
    marginTop: -30,
  },
  emptyScreenText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#808080',
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
    marginVertical: '4%',
    paddingHorizontal: '3%',
    // width: 170,
    // margin: 20,
  },
  productItemFav: {
    width: 30,
    height: 30,
    right: 4,
    top: 5,
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
    fontSize: 15,
    marginVertical: '5%',
    color: '#161a25',
    // marginTop: 14,
    // fontSize: 15,
  },
  productItemPriceText: {
    fontFamily: 'Poppins-Medium',
    fontSize: height > 800 ? 21 : 19,
    color: '#161a25',
    padding: 5,
    // top: hp(.6)
    // top: 4
  },
  productItemDollarPriceText: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#161a25',
    top: 4,
    position: 'absolute',
    left: -8,
    // right:2,
    // bottom: 17,
  },
});
