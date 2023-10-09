import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { minusCart, plusCart, removeCart } from '../Redux/CartSlice';

const CartScreen = ({navigation}:any) => {
  const CartList = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const CartPrice = () => {
    let total = 0;
    CartList.map( (item: any) => {
      total = total + item.qty * item.price
    })
    let Dollar = Math.floor(total);
    let RT = total - Dollar
    let Cents = RT.toString().slice(1,4)
    let FullTotal = Dollar + Cents;
    return FullTotal;
  }

  const MinusCart = (item:any) => {
    if (item.qty > 1) {
      dispatch( minusCart(item) )
    } else {
      dispatch( removeCart(item) )
    }
  }

  const PlusCart = (item:any) => {
    if (item.qty < 15) {
      dispatch( plusCart(item) )
    } else {
      Alert.alert(
        'Little Food',
        `      Sorry! Quantity limit is only 15.`,
      );
    }
  }



  return (
    <View style={styles.container}>
      {/* Header Component*/}
      <View style={[styles.header]}>
        <Text style={styles.headerText}>Cart</Text>
      </View>

      {CartList == '' ? (
        <View style={styles.emptyScreenView}>
          <Image
            source={require('../Images/cart.jpg')}
            resizeMode="contain"
            style={styles.emptyScreenImage}
          />
          <Text style={styles.emptyScreenMainText}>Your cart is empty!</Text>
          <Text style={styles.emptyScreenText}>
            Looks like you haven't added anything to your cart yet
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={CartList}
            contentContainerStyle={{paddingBottom: 140}}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <View key={item.id} style={{flex: 1, alignItems: 'center'}}>
                  <View style={styles.cartProductView}>
                    {/* Image */}
                    <View style={styles.cartProductImage}>
                      <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{
                          width: 70,
                          height: 70,
                        }}
                      />
                    </View>

                    {/* Name */}
                    <Text style={styles.cartProductName}>{item.name}</Text>

                    {/* Price */}
                    <View style={styles.cartProductPriceView}>
                      <Text style={styles.cartProductPriceDollar}>$</Text>
                      <Text style={styles.cartProductPrice}>{item.price}</Text>
                    </View>

                    {/* Quantity Bar */}
                    <View style={styles.quantityBarView}>
                      <TouchableOpacity style={styles.quantityBtnView} onPress={() => MinusCart(item)}>
                        <Text style={styles.quantityBtnText}>-</Text>
                      </TouchableOpacity>

                      <Text style={styles.quantityText}>{item.qty}</Text>

                      <TouchableOpacity style={styles.quantityBtnView} onPress={() => PlusCart(item)}>
                        <Text style={styles.quantityBtnText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />

          <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
            <View
              style={{
                backgroundColor: '#fff',
                width: '118%',
                borderRadius: 10,
                height: 70,
                alignSelf: 'center',
                justifyContent: 'center',
                elevation: 10,
              }}>
                <View style={{flexDirection: "row",marginLeft : 20,}}>
                  <Text style={{ fontSize: 15,fontFamily: "Poppins-Regular",color: "#161a25"}}>Total Cart :</Text>
                  <Text style={{ position: "absolute", right: 30, fontSize: 16,fontFamily: "Poppins-Regular",color: "#161a25"}}>{CartList.length}</Text>
                </View>
                <View style={{flexDirection: "row",marginLeft : 20}}>
                  <Text style={{ fontSize: 15,fontFamily: "Poppins-Regular",color: "#161a25"}}>Total Price :</Text>
                  <Text style={{ position: "absolute", right: 20, fontSize: 16,fontFamily: "Poppins-Regular",color: "#161a25"}}>$ {CartPrice()}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.checkoutBtnView} onPress={() => navigation.navigate("Checkout" , {amount : CartPrice()})}>
              <Text style={styles.checkoutBtnText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};
// {/* <View style={{paddingBottom: 60}} /> */}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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

  // Empty Cart Screen
  emptyScreenView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyScreenImage: {
    height: '25%',
    width: '55%',
    marginTop: -50,
  },
  emptyScreenMainText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#161a25',
    marginTop: 30,
  },
  emptyScreenText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    width: 280,
    color: '#808080',
    textAlign: 'center',
  },

  // cart view
  cartProductView: {
    width: '92%',
    backgroundColor: '#fff',
    marginVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    elevation: 10,
  },
  cartProductImage: {
    marginLeft: 15,
    margin: 10,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartProductName: {
    color: '#161a25',
    fontSize: 19,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
  },
  cartProductPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: 105,
  },
  cartProductPriceDollar: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    left: 5,
    color: '#000',
  },
  cartProductPrice: {
    fontSize: 21,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 8,
    color: '#000',
  },

  quantityBarView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    bottom: 16,
    backgroundColor: '#fef2be',
    borderRadius: 20,
    alignItems: 'center',
  },
  quantityBtnView: {
    backgroundColor: 'orange',
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  quantityBtnText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    top: -1,
  },
  quantityText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    width: 40,
    textAlign: 'center',
    // marginHorizontal: 18,
  },

  checkoutBtnView: {
    backgroundColor: 'orange',
    width: '120%',
    height: 45,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  checkoutBtnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});
