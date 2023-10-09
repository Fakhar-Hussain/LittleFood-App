import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from '../Custom/Icons';
import * as Animatable from 'react-native-animatable';

import {useDispatch, useSelector} from 'react-redux';
import {addCarts} from '../../Redux/CartSlice';

const ProductDetails = (props: any) => {
  const {navigation, route} = props;
  const [Limit, setLimit] = useState(1);

  let Item = route.params.ProductItem;
  const dispatch = useDispatch();


  const MinusBtn = () => {
    if (Limit > 1) {
      setLimit(Limit - 1);
    }
  };
  const PlusBtn = () => {
    if (Limit < 15) {
      setLimit(Limit + 1);
    } else {
      Alert.alert(
        'Little Food',
        `      Sorry! Quantity limit is only 15.`,
      );
    }
  };


  const AddtoCartBtn = () => {
    dispatch(addCarts(Item))
    navigation.navigate('MainScreen');
  };
  Item.qty = Limit;

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
        <Text style={styles.headerText}>Details</Text>
      </View>

      {/* Product Details */}
      <View>
        {/* Product Image , Name & Rating */}
        <View style={{alignItems: 'center'}}>
          {/* Image */}
          <Animatable.Image
            animation="bounceIn"
            duration={2000}
            iterationCount={1}
            direction="alternate"
            source={Item.image}
            resizeMode="contain"
            style={{
              width: 240,
              height: 180,
              marginTop: '5%',
              // backgroundColor: "blue"
            }}
          />
          {/* Rating */}
          <View style={styles.productItemRating}>
            <Icon
              type={'FontAwesome'}
              name={'star'}
              color={'#fec200'}
              size={18}
              style={{top: 2}}
            />
            <Text style={styles.productItemRatingText}>{Item.rate}</Text>
          </View>
          {/* Name */}
          <Animatable.Text
            animation="slideInDown"
            iterationCount={1}
            direction="alternate"
            style={styles.productItemNameText}>
            {Item.name}
          </Animatable.Text>

          {/* <View style={styles.productNameLine} /> */}
        </View>

        {/* Description */}
        <ScrollView
          style={{maxHeight: '30%', marginTop: 10}}
          showsVerticalScrollIndicator={false}>
          <Animatable.Text
            animation="slideInLeft"
            iterationCount={1}
            direction="alternate"
            style={styles.productDescriptionText}>
            Prepare to tantalize your taste buds with our irresistible
            Strawberry Cake. Bursting with the sweet, juicy flavors of ripe
            strawberries, this cake is a delightful treat for all occasions.
            Whether you're celebrating a special milestone or simply craving a
            delectable dessert, our Strawberry Cake is sure to be a showstopper.
          </Animatable.Text>
        </ScrollView>

        {/* Quantity Bar */}
        <View
          style={{
            flexDirection: 'row',
            left: 25,
            position: 'absolute',
            bottom: '-10%',
          }}>
          <Text style={styles.QuantityText}>Quantity :</Text>
          <View
            style={{
              marginLeft: 15,
              backgroundColor: '#fef2be',
              borderRadius: 20,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => MinusBtn()}
              style={{
                backgroundColor: 'orange',
                height: 25,
                width: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  fontFamily: 'Poppins-SemiBold',
                  top: -1,
                }}>
                -
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontFamily: 'Poppins-Regular',
                width: 40,
                textAlign: 'center',
                // marginHorizontal: 18,
              }}>
                {Limit}
            </Text>

            <TouchableOpacity
              onPress={() => PlusBtn()}
              style={{
                backgroundColor: 'orange',
                height: 25,
                width: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  fontFamily: 'Poppins-SemiBold',
                  top: -1,
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Add to cart Btn  */}
      <Text style={styles.productprice}>Price</Text>
      <View style={styles.addtocartview}>
        <View style={styles.productpriceview}>
          <Text style={styles.productpricedollar}>$</Text>
          <Text style={styles.productpricetext}>{Item.price}</Text>
        </View>

        <Animatable.View
          animation="slideInRight"
          iterationCount={1}
          direction="alternate"
          style={{width: '100%', height: 50}}>
          <TouchableOpacity
            style={styles.addtocartbtn}
            onPress={() => AddtoCartBtn()}>
            <Icon
              type={'Entypo'}
              name={'wallet'}
              color={'#fff'}
              size={20}
              style={{top: -2, marginRight: 8}}
            />
            <Text style={styles.addtocartbtntext}>Add to cart</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

export default ProductDetails;

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

  // Details Product
  // productNameLine: {
  //   width: '50%',
  //   marginBottom: 10,
  //   borderBottomWidth: 0.8,
  //   borderBottomColor: 'lightgrey',
  //   alignSelf: 'center',
  // },
  productItemNameBarView: {
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // width: '100%',
    // backgroundColor: 'pink',
  },
  productItemNameText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    marginTop: '2%',
    color: '#161a25',
    alignSelf: 'center',
    // backgroundColor: "red"
  },
  productItemRating: {
    flexDirection: 'row',
    position: 'absolute',
    left: 20,
    top: 20,
    // backgroundColor: "blue",
  },
  productItemRatingText: {
    fontFamily: 'Poppins-Medium',
    paddingLeft: 4,
    color: 'black',
    fontSize: 17,
  },

  productDescriptionText: {
    width: '88%',
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    color: 'grey',
    // textAlign: 'center',
    // letterSpacing:2,
    // lineHeight: 22,
  },

  // Quantity
  QuantityText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },

  // Add to cart
  addtocartview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // backgroundColor: 'red',
  },
  addtocartbtn: {
    backgroundColor: 'orange',
    width: '60%',
    height: 45,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  addtocartbtntext: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },

  productpriceview: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    marginTop: 18,
    paddingHorizontal: 5,
    // marginLeft: 15,
    // backgroundColor: "red"
  },
  productpricedollar: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    marginTop: -14,
    left: 5,
    color: '#000',
  },
  productpricetext: {
    fontSize: 26,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 8,
    color: '#000',
  },
  productprice: {
    position: 'absolute',
    bottom: 50,
    left: 40,
    fontSize: 15,
    color: '#000',
  },
});
