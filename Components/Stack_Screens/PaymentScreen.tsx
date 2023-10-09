import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {
  CardForm,
  createToken,
  confirmPayment,
  StripeProvider,
} from '@stripe/stripe-react-native';
import axios from 'axios';
import Icon from '../Custom/Icons';
import * as Animatable from 'react-native-animatable';
import {DeclinePopup, PaymentPopup} from '../CustomComponents';
import {useDispatch} from 'react-redux';
import {emptyArray} from '../../Redux/CartSlice';

const PaymentScreen = (props: any) => {
  const {navigation, route} = props;
  const dispatch = useDispatch();

  let PA = route.params.amount.toString();
  // let PA0 = PA.split('.')[0];
  // let PA1 = PA.split('.')[1];
  // let PA2 = PA1.slice(0, 2);

  // let PA3 = PA2.length == 1 ? PA0 + '.' + PA2 + '0' : PA0 + '.' + PA2;
  // let PA4 = Number(PA3) * 100;

  let PublicKey =
    'pk_test_51NDKmABoVTaXgprYu6DKe8APg3FWImYrGczeHUBT95u5FWYZTywpVQg6SQ4Dp1gWVaci62uf4GDbdmVHap5BYqdz00xCb2e1Gv';

  const [Card, setCard] = useState(null);
  const [Next, setNext] = useState(false);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Contact, setContact] = useState('');
  const [PayPopup, setPayPopup] = useState(false);
  const [Decline, setDecline] = useState('');


  const ReadyAmount = () => {
    if (PA.includes(".")) {
      let PA0 = PA.split('.')[0];
      let PA1 = PA.split('.')[1];
      let PA2 = PA1.slice(0, 2);

      let PA3 = PA2.length == 1 ? PA0 + '.' + PA2 + '0' : PA0 + '.' + PA2;
      let PA4 = Number(PA3) * 100;
      return PA4;
    }
    else{
      let PA1 = Number(PA);
      return PA1;
    }
    
  }

  const TotalAmount = () => {
    if (PA.includes(".")) {
      let PA0 = PA.split('.')[0];
      let PA1 = PA.split('.')[1];
      let PA2 = PA1.slice(0, 2);
      let PA3 = PA2.length == 1 ? PA0 + '.' + PA2 + '0' : PA0 + '.' + PA2;
      return PA3;
    }
    else{
      return PA
    }
  }


  const CardData = (details: any) => {
    if (details.complete == true) {
      setCard(details);
    } else {
      setCard(null);
    }
  };

  const CancelPopup = () => {
    setPayPopup(false);
    navigation.navigate('Home');
    dispatch(emptyArray());
  };
  
  const DeclinedPopup = () => {
    setPayPopup(false);
    setDecline('')
  };

  const CardDetails = async () => {
    let apiData = {
      amount: ReadyAmount(),
      currency: 'usd',
    };
    const response = await axios.post('https://littlefood-server.vercel.app/payment_sheet', apiData)
      try {
        if (response?.data?.paymentIntent) {
          let PaymentMethod = confirmPayment(response?.data?.paymentIntent, {
            paymentMethodType: 'Card',
          });
          let Code = (await PaymentMethod).error?.code;
          if (Code == 'Failed') {
            setDecline("Failed")
          }
          setPayPopup(true);
        }
      } catch (error) {
        console.log("Error in card_details", error);
      }
  };

  const Cardholder = () => {
    if (Name == '') {
      Alert.alert('Payment', 'Please fill all fields first!');
    } else {
      setNext(true);
    }
  };



  return (
    <>
      <View
        style={{
          flex: 1,
          opacity: PayPopup == true ? 0.2 : 1,
          backgroundColor: PayPopup == true ? 'black' : '#fff',
        }}>
        <StatusBar hidden />
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
          <Text style={styles.headerText}>Payment</Text>
        </View>

        {/* full Card */}
        {Next == true ? (
          <Animatable.View
            animation={'flipInY'}
            iterationCount={1}
            direction="alternate"
            style={{
              height: 170,
              width: '88%',
              backgroundColor: '#323',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
            }}>
            {/* Card Number */}
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Ubuntu-Bold',
                color: '#fff',
                bottom: 45,
                letterSpacing: 4,
                position: 'absolute',
                alignSelf: 'center',
              }}>
              **** **** **** ****
            </Text>
            {/* Card Name */}
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-SemiBold',
                color: '#fff',
                letterSpacing: 2,
                position: 'absolute',
                left: 24,
                bottom: 24,
              }}>
              {Next == true ? Name : ''}
            </Text>
            {/* Card Chip */}
            <Image
              source={require('../../Images/chip.png')}
              style={{
                position: 'absolute',
                width: 60,
                height: 40,
                // right: 5,
                left: 15,
                top: 50,
              }}
              resizeMode="cover"
            />
            {/* Visa Card */}
            <Image
              source={require('../../Images/visacard.png')}
              style={{
                position: 'absolute',
                width: 60,
                height: 40,
                right: 10,
                bottom: 0,
              }}
              resizeMode="contain"
            />
            {/* MasterCard */}
            {/* <Image 
              source={require("../../Images/mastercard.png")}
              style={{
                position: "absolute",
                width: 60,
                height: 40,
                right: 5,
                bottom: 5,
              }}
              resizeMode='cover'
            /> */}
          </Animatable.View>
        ) : (
          <View
            style={{
              height: 170,
              width: '88%',
              backgroundColor: '#323',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
            }}>
            {/* Card Number */}
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Ubuntu-Bold',
                color: '#fff',
                bottom: 45,
                letterSpacing: 4,
                position: 'absolute',
                alignSelf: 'center',
              }}>
              **** **** **** ****
            </Text>
            {/* Card Chip */}
            <Image
              source={require('../../Images/chip.png')}
              style={{
                position: 'absolute',
                width: 60,
                height: 40,
                // right: 5,
                left: 15,
                top: 50,
              }}
              resizeMode="cover"
            />
            {/* Visa Card */}
            <Image
              source={require('../../Images/visacard.png')}
              style={{
                position: 'absolute',
                width: 60,
                height: 40,
                right: 10,
                bottom: 0,
              }}
              resizeMode="contain"
            />
          </View>
        )}

        <StripeProvider publishableKey={PublicKey}>
          <View style={{flex: 1}}>
            {Next == true ? (
              <>
                {/* Card Form */}
                <CardForm
                  onFormComplete={(Details: any) => {
                    CardData(Details);
                  }}
                  placeholders={{
                    number: 'Card Number',
                    expiration: 'Expiry Date',
                  }}
                  cardStyle={{
                    placeholderColor: 'gray',
                    textColor: 'black',
                    textErrorColor: '#FF5500',
                    // backgroundColor: "Black"
                  }}
                  defaultValues={{
                    countryCode: 'PK',
                  }}
                  style={{
                    height: 260,
                    backgroundColor: '#fff',
                    marginTop: 20,
                    marginHorizontal: 20,
                  }}
                />
                {/* Back Btn */}
                <TouchableOpacity
                  onPress={() => setNext(false)}
                  style={{
                    position: 'absolute',
                    left: 25,
                    bottom: 60,
                    backgroundColor: '#161a25',
                    height: 32,
                    width: 80,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#fff', fontFamily: 'Poppins-Medium'}}>
                    {'<- Back'}
                  </Text>
                </TouchableOpacity>

                {/* Confirm Payment */}
                <TouchableOpacity
                  onPress={() => CardDetails()}
                  disabled={Card == null ? true : false}
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    width: '90%',
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Card == null ? 'grey' : 'orange',
                    alignSelf: 'center',
                    borderRadius: 7,
                  }}>
                  <Text style={{color: '#fff', fontFamily: 'Poppins-Bold'}}>
                    Pay Now
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={{marginTop: 20, alignItems: 'center'}}>
                  {/* Name */}
                  <Text
                    style={{
                      color: '#000',
                      left: 20,
                      fontFamily: 'Poppins-Medium',
                      alignSelf: 'flex-start',
                      fontSize: 12,
                    }}>
                    Name
                  </Text>
                  <TextInput
                    onChangeText={txt => setName(txt)}
                    value={Name}
                    style={{
                      width: '85%',
                      height: 45,
                      paddingLeft: 20,
                      color: '#000',
                      elevation: 4,
                      fontFamily: 'Poppins-Medium',
                      borderRadius: 25,
                      backgroundColor: "#fff"
                    }}
                  />

                  {/* Email */}
                  <Text
                    style={{
                      color: '#000',
                      left: 20,
                      fontFamily: 'Poppins-Medium',
                      alignSelf: 'flex-start',
                      fontSize: 12,
                      marginTop: 5,
                    }}>
                    Email
                  </Text>
                  <TextInput
                    onChangeText={txt => setEmail(txt)}
                    value={Email}
                    style={{
                      width: '85%',
                      height: 45,
                      paddingLeft: 20,
                      color: '#000',
                      elevation: 4,
                      fontFamily: 'Poppins-Medium',
                      borderRadius: 25,
                      backgroundColor: "#fff"
                    }}
                  />
                  {/* Contact */}
                  <Text
                    style={{
                      color: '#000',
                      left: 20,
                      fontFamily: 'Poppins-Medium',
                      alignSelf: 'flex-start',
                      fontSize: 12,
                      marginTop: 5,
                    }}>
                    Contact
                  </Text>
                  <TextInput
                    onChangeText={txt => setContact(txt)}
                    value={Contact}
                    style={{
                      width: '85%',
                      height: 45,
                      paddingLeft: 20,
                      color: '#000',
                      elevation: 4,
                      fontFamily: 'Poppins-Medium',
                      borderRadius: 25,
                      backgroundColor: "#fff"
                    }}
                    keyboardType="number-pad"
                  
                  />

                  {/* Amount */}
                  <Text
                    style={{
                      color: '#000',
                      left: 20,
                      fontFamily: 'Poppins-Medium',
                      alignSelf: 'flex-start',
                      fontSize: 12,
                      marginTop: 5,
                    }}>
                    Payable Amount
                  </Text>
                  <TextInput
                    editable={false}
                    value={"$ "+TotalAmount()}
                    style={{
                      width: '85%',
                      height: 45,
                      paddingLeft: 20,
                      color: 'darkgreen',
                      elevation: 4,
                      fontFamily: 'Poppins-SemiBold',
                      borderRadius: 25,
                      backgroundColor: '#fff',
                    }}
                    keyboardType="number-pad"
                  />
                </View>

                <TouchableOpacity
                  onPress={() => Cardholder()}
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    width: '90%',
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'orange',
                    alignSelf: 'center',
                    borderRadius: 7,
                  }}>
                  <Text style={{color: '#fff', fontFamily: 'Poppins-Bold'}}>
                    Next
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </StripeProvider>
      </View>

      {
        PayPopup == true 
            ?
              Decline == "Failed"
              ?
              <DeclinePopup onDecline={DeclinedPopup} /> 
              :
              <PaymentPopup onClose={CancelPopup} /> 
            : 
            null
      }
    </>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
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
});
