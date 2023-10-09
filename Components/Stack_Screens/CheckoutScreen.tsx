import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import Icon from '../Custom/Icons';
import {CheckBox} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {OrderPlaced} from '../CustomComponents';
import {useDispatch, useSelector} from 'react-redux';
import {emptyArray} from '../../Redux/CartSlice';

let Address = `Flat # E17, Block-B, Shadman Town, Karachi, Pakistan Near Ali Gadh
University`;

const CheckoutScreen = (props: any) => {
  let dispatch = useDispatch();
  const CartList = useSelector((state: any) => state.cart);

  let {navigation, route} = props;
  let totalAmount = route.params.amount;

  const [COD, setCOD] = useState(true);
  const [CP, setCP] = useState(false);
  const [OrderPopup, setOrderPopup] = useState(false);

  let delivery = totalAmount / 6;
  let DeliveryCharges = delivery.toString().slice(0, 5);  
  let PayableAmount = parseFloat(totalAmount) + parseFloat(DeliveryCharges);

  let PA = PayableAmount.toString();

  const FirstAmount = () => {
    if (PA.includes('.')) {
      let PA0 = PA.split('.')[0];
      let PA4 = Number(PA0);
      return PA4;
    } else {
      let PA1 = Number(PA);
      return PA1;
    }
  };

  const TotalAmount = () => {
    if (PA.includes('.')) {
      let PA0 = PA.split('.')[0];
      let PA1 = PA.split('.')[1];
      let PA2 = PA1.slice(0, 2);
      let PA3 = PA2.length == 1 ? PA0 + '.' + PA2 + '0' : PA0 + '.' + PA2;
      return PA3;
    } else {
      return PA;
    }
  };

  const handleCashOnDeliveryBox = () => {
    if (COD == false) {
      setCOD(true);
      setCP(false);
      // console.log('Cash on Delivery');
    } else {
      setCOD(false);
      setCP(true);
      // console.log('No! Cash on Delivery');
    }
  };

  const handleCardPayBox = () => {
    if (CP == false) {
      setCP(true);
      setCOD(false);
      // console.log('Card Payment');
    } else {
      setCP(false);
      setCOD(true);
      // console.log('No! Card Payment');
    }
  };

  const OrderNow = () => {
    setOrderPopup(true);
  };

  const PayNow = () => {
    {
      FirstAmount() < 50
        ? Alert.alert(
            'Payment',
            `Your payable amount is below 50 dollar.
Please add more items to your cart.`,
            [{text: 'OK'}],
          )
        : navigation.navigate('Payment', {amount: PayableAmount});
    }
  };

  const CancelPopup = () => {
    setOrderPopup(false);
    navigation.navigate('Home');
    dispatch(emptyArray());
  };

  return (
    <>
      <View
        style={[
          styles.container,
          {
            opacity: OrderPopup == true ? 0.2 : 1,
            backgroundColor: OrderPopup == true ? 'black' : '#fafafa',
          },
        ]}>
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
          <Text style={styles.headerText}>Checkout</Text>
        </View>

        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
          {/* Delivery Time */}
          <View style={styles.DeliveryRowView}>
            <Text style={styles.Heading}>Delivery Time :</Text>
            <Text style={styles.DeliveryTimeText}>Now ( 35 min )</Text>
          </View>

          {/* Line */}
          <View style={styles.HLine} />

          {/* Delivery Address */}
          <View>
            <View style={styles.DeliveryRowView}>
              <Text style={styles.Heading}>Delivery Details :</Text>
              <TouchableOpacity style={styles.DeliveryIconView}>
                <Icon
                  name={'pencil-square-o'}
                  type={'FontAwesome'}
                  size={24}
                  color={'#161a25'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.DeliveryAddressTextView}>
              <Text style={styles.DeliveryAddressText}>{Address}</Text>
            </View>
          </View>

          {/* Line */}
          <View style={styles.HLine} />

          {/* Payment Method */}
          <View>
            <Text style={styles.Heading}>Payment Method :</Text>
            {/* Cash on Delivery */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 300,
                marginLeft: 10,
                marginTop: -6,
              }}>
              <CheckBox
                checked={COD}
                onPress={handleCashOnDeliveryBox}
                size={22}
                checkedColor="orange"
                uncheckedColor="grey"
              />
              <TouchableOpacity onPress={handleCashOnDeliveryBox}>
                <Text
                  style={[
                    {
                      fontSize: 15,
                      fontFamily: 'Poppins-Regular',
                      paddingHorizontal: 15,
                      paddingVertical: 2,
                      borderRadius: 7,
                      width: 180,
                      // elevation: 5,
                      textAlign: 'center',
                      bottom: 2,
                      paddingTop: 3,
                      backgroundColor: COD == false ? 'grey' : 'orange',
                      color: '#fff',
                      // color: COD == false ? '#fff' : '#fff',
                    },
                  ]}>
                  Cash On Delivery
                </Text>
              </TouchableOpacity>
            </View>
            {/* Card Payment */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 300,
                marginLeft: 10,
                top: -18,
              }}>
              <CheckBox
                checked={CP}
                onPress={handleCardPayBox}
                size={22}
                checkedColor="orange"
                uncheckedColor="grey"
              />
              <TouchableOpacity onPress={handleCardPayBox}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                    paddingHorizontal: 15,
                    paddingVertical: 2,
                    borderRadius: 7,
                    width: 180,
                    // elevation: 5,
                    textAlign: 'center',
                    bottom: 2,
                    paddingTop: 3,
                    backgroundColor: CP == false ? 'grey' : 'orange',
                    color: '#fff',
                    // color: CP == false ? '#333' : '#fff',
                  }}>
                  Card Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.HLine, {marginTop: -14}]} />

          {/* Order Details */}
          <View>
            <Text style={styles.Heading}>Order Details :</Text>
            <View
              style={{
                backgroundColor: '#fff',
                width: '88%',
                alignSelf: 'center',
                borderRadius: 14,
                elevation: 10,
                marginTop: 10,
                paddingBottom: 10,
              }}>
              {/* Item Qty Price Tags */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 12,
                  borderBottomWidth: 0.5,
                  borderColor: '#000',
                  width: '85%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Item
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Quantity
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Price
                </Text>
              </View>
              {/* Item Qty Price Details */}
              <FlatList
                data={CartList}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 17,
                        height: 40,
                        width: '85%',
                        alignSelf: 'center',
                        alignItems: 'center',
                      }}>
                      {/* Image */}
                      <Image
                        source={item.image}
                        style={{height: 50, width: 50, top: -5,}}
                        resizeMode="contain"
                      />
                      {/* QTY */}
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontFamily: 'Poppins-Regular',
                        }}>
                        {item.qty}
                      </Text>
                      {/* Price */}
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontFamily: 'Poppins-Regular',
                        }}>
                        {item.price}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <View style={{marginBottom: 210}} />
        </ScrollView>

        {/* Order & Pay Button & Order details */}
        <View style={styles.OrderPaymentView}>
          {/* Amount Details */}
          <View style={styles.FullAmountView}>
            <View style={styles.AmountView}>
              <Text style={styles.AmountText}>Total Amount :</Text>
              <Text style={styles.AmountPrice}>$ {totalAmount}</Text>
            </View>
            <View style={styles.AmountView}>
              <Text style={styles.AmountText}>Discount :</Text>
              <Text style={styles.AmountPrice}>$ 0.00</Text>
            </View>
            <View style={styles.AmountView}>
              <Text style={styles.AmountText}>Delivery Charges :</Text>
              <Text style={styles.AmountPrice}>$ {DeliveryCharges}</Text>
            </View>

            <View style={styles.HLine2} />

            <View style={styles.AmountView}>
              <Text style={styles.AmountText}>Payable Amount:</Text>
              <Text style={styles.AmountPrice}>$ {TotalAmount()}</Text>
            </View>
          </View>

          {/* Order Button */}
          {COD == true ? (
            <TouchableOpacity
              style={styles.checkoutBtnView}
              onPress={() => OrderNow()}>
              <Text style={styles.checkoutBtnText}>Order Now</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.checkoutBtnView}
              onPress={() => PayNow()}>
              <Text style={styles.checkoutBtnText}>Pay Now</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {OrderPopup == true ? <OrderPlaced onClose={CancelPopup} /> : null}
    </>
  );
};

export default CheckoutScreen;

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
  },
  headerFirstIcon: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 10,
  },

  DeliveryRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Heading: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    top: 3,
    marginLeft: 24,
    marginTop: 8,
    color: '#161a25',
  },
  DeliveryIconView: {
    marginRight: 24,
    top: 18,
  },
  DeliveryAddressTextView: {
    backgroundColor: '#161a25',
    width: '90%',
    borderRadius: 12,
    marginHorizontal: 10,
    marginTop: 15,
    alignSelf: 'center',
    elevation: 10,
    top: -6,
  },
  DeliveryAddressText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    padding: 10,
    left: 10,
    width: '86%',
  },
  DeliveryTimeText: {
    marginRight: 30,
    top: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#161a25',
  },

  checkoutBtnView: {
    backgroundColor: 'orange',
    width: '100%',
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

  OrderPaymentView: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    // backgroundColor: 'red',
    width: '90%',
  },
  FullAmountView: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    height: 135,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  AmountView: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  AmountText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#161a25',
  },
  AmountPrice: {
    position: 'absolute',
    right: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#161a25',
  },

  HLine: {
    width: '86%',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    marginVertical: 7,
  },
  HLine2: {
    width: '90%',
    height: 2,
    borderColor: '#000',
    borderWidth: 0.6,
    alignSelf: 'center',
    marginVertical: 8,
  },
});
