import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const FavoritePopup = () => {
  return (
    <Animatable.View
      animation="fadeOut"
      iterationCount={1}
      direction="alternate"
      duration={1200}
      delay={900}
      style={{
        position: 'absolute',
        width: '60%',
        height: 38,
        backgroundColor: '#161a25',
        bottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        elevation: 10,
      }}>
      <Text style={{color: '#fff', fontSize: 14, fontFamily: 'Poppins-Medium'}}>
        Favorite add successfully
      </Text>
    </Animatable.View>
  );
};

export const OrderPlaced = ({onClose}: any) => {
  
  return (
    <Animatable.View
      animation="bounceIn"
      iterationCount={1}
      direction="alternate"
      style={{
        position: 'absolute',
        alignSelf: 'center',
        width: '70%',
        height: '60%',
        backgroundColor: '#fffdc8',
        zIndex: 2,
        marginTop: 90,
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: "#000"
      }}>
      <Image
        source={require('../Images/tick2.png')}
        style={{
          width: '55%',
          height: '50%',
          alignSelf: "center"
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          color: '#000',
          fontSize: 20,
          width: '90%',
          textAlign: 'center',
          alignSelf: 'center',
          fontFamily: 'Ubuntu-Bold',
        }}>
        Your order has been placed successfully.
      </Text>
      <Text
        style={{
          color: 'grey',
          fontSize: 12,
          width: '75%',
          textAlign: 'center',
          alignSelf: 'center',
          fontFamily: 'Poppins-Regular',
          marginTop: 10,
        }}>
        Sit back and relax as your yummy food is on it's way!
      </Text>

      <TouchableOpacity onPress={onClose}
        style={{
          width: '80%',
          height: 40,
          backgroundColor: 'orange',
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 25,
          elevation: 5,
        }}>
        <Text
          style={{color: '#fff', fontSize: 16, fontFamily: 'Poppins-Medium'}}>
          Continue
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export const PaymentPopup = ({onClose}: any) => {
  
  return (
    <Animatable.View
      animation="bounceIn"
      iterationCount={1}
      direction="alternate"
      style={{
        position: 'absolute',
        alignSelf: 'center',
        width: '70%',
        height: '60%',
        backgroundColor: '#fffdc8',
        zIndex: 2,
        marginTop: 90,
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: "#000"
      }}>
      <Image
        source={require('../Images/tick2.png')}
        style={{
          width: '55%',
          height: '50%',
          alignSelf: "center"
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          color: '#000',
          fontSize: 20,
          width: '90%',
          textAlign: 'center',
          alignSelf: 'center',
          fontFamily: 'Ubuntu-Bold',
          // marginTop: 10,
        }}>
          Your transaction has been completed.
        {/* Your Payment has been paid successfully. */}
      </Text>
      <Text
        style={{
          color: 'grey',
          fontSize: 12,
          width: '75%',
          textAlign: 'center',
          alignSelf: 'center',
          fontFamily: 'Poppins-Regular',
          marginTop: 10,
        }}>
        Sit back and relax as your yummy food is on it's way!
      </Text>

      <TouchableOpacity onPress={onClose}
        style={{
          width: '80%',
          height: 40,
          backgroundColor: 'orange',
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 25,
          elevation: 5,
        }}>
        <Text
          style={{color: '#fff', fontSize: 16, fontFamily: 'Poppins-Medium'}}>
          Continue
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export const DeclinePopup = ({onDecline}: any) => {
  
  return (
    <Animatable.View
      animation="bounceIn"
      iterationCount={1}
      direction="alternate"
      style={{
        position: 'absolute',
        alignSelf: 'center',
        width: '70%',
        height: '60%',
        backgroundColor: '#ffddd6',
        zIndex: 2,
        marginTop: 90,
        borderRadius: 20,
        // backgroundColor: '#ffcbd1',
        // borderWidth: 1,
        // borderColor: "#000"
      }}>
      <Image
        source={require('../Images/fcard.png')}
        style={{
          width: '50%',
          height: '50%',
          alignSelf: "center",
          // backgroundColor: "red"
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          color: '#000',
          fontSize: 18,
          width: '80%',
          textAlign: 'center',
          alignSelf: 'center',
          fontFamily: 'Ubuntu-Medium',
          marginTop: 10,
        }}>
         Sorry transaction failed!
      </Text>
      <Text
        style={{
          color: 'grey',
          fontSize: 12,
          width: '75%',
          textAlign: 'center',
          alignSelf: 'center',
          fontFamily: 'Poppins-Regular',
          marginTop: 10,
        }}>  
        Please check your payment details and try it again
      </Text>

      <TouchableOpacity onPress={onDecline}
        style={{
          width: '80%',
          height: 40,
          backgroundColor: '#ff2c2c',
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 25,
          elevation: 5,
        }}>
        <Text
          style={{color: '#fff', fontSize: 16, fontFamily: 'Poppins-Medium'}}>
          Try again
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};
