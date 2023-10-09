import {StyleSheet, Text, View, Image, TouchableOpacity,ScrollView} from 'react-native';
import React from 'react';
import Icon from './Custom/Icons';

const ProfileScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.userHeader}>
        <Image
          source={require('../Images/user.png')}
          resizeMode="cover"
          style={styles.userImage}
        />
        <Text style={styles.userName}>Fakhar Hussain</Text>
        <Text style={styles.userEmail}>fakharhussain.179@gmail.com</Text>
      </View>

      <View style={styles.tableBar}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.tableBarNumber}>20</Text>
          <Text style={styles.tableBarText}>Pending Orders</Text>
        </View>
        <View style={styles.centerLine} />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.tableBarNumber}>120</Text>
          <Text style={styles.tableBarText}>Completed Orders</Text>
        </View>
      </View>

      <ScrollView style={styles.menu} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.menuItemView}>
          <Icon type={'FontAwesome'} color={'#3d3d3d'} name={'user-o'} size={24} style={{top: 3}} />
          <Text style={styles.menuItemText}>Membership</Text>
          <Icon type={'Entypo'} color={'#3d3d3d'} name={'chevron-thin-right'} size={24} style={styles.menuItemIcon} />
        </TouchableOpacity>
        {/* onPress={() => navigation.navigate("NotifyScreen")} */}
        <TouchableOpacity style={styles.menuItemView} onPress={() => navigation.navigate("NotifyScreen")}>
          <Icon type={'SimpleLineIcons'} name={'bell'} color={'#3d3d3d'} size={24} style={{top: 3}} />
          <Text style={styles.menuItemText}>Notifications</Text>
          <Icon type={'Entypo'} color={'#3d3d3d'} name={'chevron-thin-right'} size={24} style={styles.menuItemIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItemView}>
          <Icon type={'SimpleLineIcons'} color={'#3d3d3d'} name={'settings'} size={24} style={{top: 3}} />
          <Text style={styles.menuItemText}>Settings</Text>
          <Icon type={'Entypo'} color={'#3d3d3d'} name={'chevron-thin-right'} size={24} style={styles.menuItemIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItemView}>
          <Icon type={'Ionicons'} color={'#3d3d3d'} name={'ios-power'} size={24} style={{top: 3}} />
          <Text style={styles.menuItemText}>Logout</Text>
          <Icon type={'Entypo'} color={'#3d3d3d'} name={'chevron-thin-right'} size={24} style={styles.menuItemIcon} />
        </TouchableOpacity>
        <View style={{marginBottom: 10}}/>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: "center"
  },
  userHeader: {
    width: '100%',
    alignItems: 'center',
    padding: 30,
    // backgroundColor: "blue",
  },
  userImage: {
    height: 130,
    width: 130,
    borderRadius: 150,
    // backgroundColor: "red",
  },
  userName: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginTop: 15,
    color: '#161a25',
  },
  userEmail: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: -5,
    color: '#808080',
  },

  tableBar: {
    flexDirection: 'row',
    backgroundColor: '#ffb43b',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 15,
    elevation: 7,
  },
  tableBarNumber: {
    fontSize: 32, 
    fontFamily: 'Poppins-Bold', 
    color: '#fff'
  },
  tableBarText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginTop: -10,
  },
  centerLine: {
    height: 65, 
    width: 2, 
    backgroundColor: '#fff'
  },


  // Menu
  menu: {
    width: '90%', 
    marginTop: 30,
  },
  menuItemView: {
    padding: 12,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    marginTop: 10,
  },
  menuItemText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#3d3d3d',
    marginLeft: 10,
  },
  menuItemIcon: {
    position: "absolute", right: 5,top:15,
  },
  

});
