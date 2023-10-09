import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from '../Custom/Icons';
import * as Animatable from 'react-native-animatable';

const NotifyScreen = ({navigation}: any) => {
  const [count , setCount] = useState(0);
  const [Anim , setAnim] = useState(false);

  const sampleArray = [
    {
      id: 1,
      Text: `Welcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favorite food has never been easier. Plus, stay tuned for exclusive deals and promotions tailored just for you.`,
    },
    {
      id: 2,
      Text: `Welcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favoriteWelcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favorite food has never been easier. Plus, stay tuned for exclusive deals and promotions tailored just for you.`,
    },
    {
      id: 3,
      Text: `Welcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favoriteWelcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favorite food has never been easier. Plus, stay tuned for exclusive deals and promotions tailored just for you.`,
    },
    {
      id: 4,
      Text: `Welcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favoriteWelcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favorite food has never been easier. Plus, stay tuned for exclusive deals and promotions tailored just for you.`,
    },
    {
      id: 5,
      Text: `Welcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favoriteWelcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favorite food has never been easier. Plus, stay tuned for exclusive deals and promotions tailored just for you.`,
    },
    {
      id: 6,
      Text: `Welcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favoriteWelcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favorite food has never been easier. Plus, stay tuned for exclusive deals and promotions tailored just for you.`,
    },
    {
      id: 7,
      Text: `Welcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favoriteWelcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favorite food has never been easier. Plus, stay tuned for exclusive deals and promotions tailored just for you.`,
    },
    {
      id: 8,
      Text: `Welcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favoriteWelcome to our little food app! We're thrilled to have you here. Get ready to indulge in a wide range of delicious meals and snacks all available at your fingertips. Ordering your favorite food has never been easier. Plus, stay tuned for exclusive deals and promotions tailored just for you.`,
    },
  ]

  const Clicked = (item : any) => {
    if (count == 0) {
      setCount(item.id)
    }
    else{
      setCount(0)
    }
  };

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
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      <FlatList 
        data={sampleArray}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          
          const Text1 = item.Text.slice(0,100);
          const Text2 = item.Text.slice(0);
          
          return (
            
              item.id == count 
              ? 
              (
                <Animatable.View 
                  animation="bounceInLeft"
                  duration={1300}
                  iterationCount={1} 
                  key={item.id} 
                  style={styles.notifyView}
                >
                  <Icon
                    type={'MaterialCommunityIcons'}
                    name={'hamburger'}
                    color={'orange'}
                    size={35}
                    style={styles.notifyIcon}
                  />
                  <TouchableOpacity style={{marginLeft: 45, width: '90%', paddingHorizontal: 15}} onPress={() => Clicked(item)} >
                    <Text
                      style={{fontSize: 15, fontFamily: 'Poppins-Medium', color: '#fff'}}>
                      {
                        count == item.id ? Text2 : Text1+ " ..."
                      }
                    </Text>
                  </TouchableOpacity>
                </Animatable.View>
              )
              :
              (
                <View key={item.id} style={styles.notifyView}>
                  <Icon
                    type={'MaterialCommunityIcons'}
                    name={'hamburger'}
                    color={'orange'}
                    size={35}
                    style={styles.notifyIcon}
                  />
                  <TouchableOpacity style={{marginLeft: 45, width: '90%', paddingHorizontal: 15}} onPress={() => Clicked(item)} >
                    <Text
                      style={{fontSize: 15, fontFamily: 'Poppins-Medium', color: '#fff'}}>
                      {
                        count == item.id ? Text2 : Text1+ " ..."
                      }
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            

            
          )
        }}
      />
    </View>
  );
};

export default NotifyScreen;

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

  // Notification
  notifyView: {
    flexDirection: 'row',
    backgroundColor: '#ffb43b',
    width: '94%',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    padding: 16,
    // marginBottom: 20
    // justifyContent: "center",
    // height: 80,
  },
  notifyIcon: {
    position: 'absolute',
    marginLeft: 12,
    top: 20,
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 10,
  }
});
