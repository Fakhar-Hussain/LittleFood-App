{/* <Bottom.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#fff",
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "orange",
            tabBarStyle: {
                height: 60,
                width: "92%",
                borderRadius: 12,
                marginHorizontal: "4%",
                bottom:14 ,
                elevation: 50
            },
            tabBarItemStyle: {
                height: 38,
                borderRadius: 130,
                marginHorizontal: 11,
                marginVertical: 11,
                // backgroundColor: "#fff",
                // elevation: 4
            },
            tabBarButton: (props): any => {<BottomTabBar {...props} />}
        }}
      >
        <Bottom.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}): any => (
                    <SimpleLineIconsIcon color={color} name="home" size={21} />
                ),
            }}


        />
        <Bottom.Screen name="Fav" component={FavScreen} 
            options={{
                tabBarIcon: ({color}): any => (
                    <IoniconsIcon name="ios-heart-outline" color={color} size={26} />
                )                
            }}
        />
        <Bottom.Screen name="Cart" component={CartScreen} 
            options={{
                tabBarIcon: ({color}): any => (
                    <EvilIconsIcon name="cart" color={color} size={32} />
                )                
            }}
        />
        <Bottom.Screen name="Profile" component={ProfileScreen} 
            options={{
                tabBarIcon: ({color}): any => (
                    <FontAwesomeIcon name="user-o" color={color} size={23} />
                )
            }}
        />
      </Bottom.Navigator> */}


















        // Product items
    //   <View style={styles.productContainer}>
    //   <TouchableOpacity style={styles.productItemView}>
    //     <Image
    //       source={require('../Images/burgerfront.png')}
    //       resizeMode="cover"
    //       style={{
    //         height: '50%',
    //         width: '70%',
    //         top: 16,
    //       }}
    //     />

    //     <TouchableOpacity style={styles.productItemFav}>
    //       <Image
    //         source={require('../Images/heart.png')}
    //         resizeMode="contain"
    //         style={{height: 24, width: 24}}
    //       />
    //     </TouchableOpacity>

    //     <View style={styles.productItemRating}>
    //       <Icon
    //         type={'FontAwesome'}
    //         name={'star'}
    //         color={'#fec200'}
    //         size={18}
    //       />
    //       <Text style={styles.productItemRatingText}>4.5</Text>
    //     </View>
    //     {/* <TouchableOpacity>
    //     </TouchableOpacity> */}

    //     <Text style={styles.productItemNameText}>King Hamburger</Text>
    //     <Text style={styles.productItemDollarPriceText}>$</Text>
    //     <Text style={styles.productItemPriceText}>19.80</Text>
    //   </TouchableOpacity>
    // </View>









      {/* Search Bar */}
      {/* <View style={styles.searchBarContainer}>
        <View style={styles.searchBarView}>
          <Icon
            type={'Ionicons'}
            name={'ios-search'}
            color={'grey'}
            size={25}
            style={{top: 8, left: 22, position: 'absolute'}}
          />
          <TextInput style={styles.searchBarInput} placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.searchBarBtn}>
          <Icon
            type={'Entypo'}
            name={'sound-mix'}
            color={'#fff'}
            size={20}
            style={{position: 'absolute'}}
          />
        </TouchableOpacity>
      </View> */}


        // Search Bar

  // searchBarContainer: {
  //   flex: 0.09,
  //   backgroundColor: 'orange',
  //   top: 16,
  //   borderRadius: 50,
  //   width: '90%',
  //   alignSelf: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  // },
  // searchBarView: {
  //   width: '70%',
  //   height: '80%',
  //   backgroundColor: '#fff',
  //   // left: -10,
  //   top: 6,
  //   borderRadius: 50,
  //   elevation: 5,
  //   flexDirection: 'row',
  // },
  // searchBarInput: {
  //   // height: '90%',
  //   width: '75%',
  //   top: 2,
  //   marginLeft: 45,
  //   fontSize: 16,
  //   fontFamily: 'Poppins-Regular',
  //   padding: 8,
  //   // backgroundColor: "red",
  //   // top: 7
  // },
  // searchBarBtn: {
  //   backgroundColor: '#161a25',
  //   width: 40,
  //   height: 40,
  //   borderRadius: 25,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   left: 10,
  // },






    //   <View style={{flex: 2.6, alignItems: 'center'}}>
    //     <Carousel
    //       loop
    //       width={width}
    //       height={width / 2}
    //       autoPlay={true}
    //       data={SliderImages}
    //       pagingEnabled={true}
    //       scrollAnimationDuration={4000}
    //       // onSnapToItem={ (index) => console.log('current index:', index)}
    //       renderItem={({item, index}) => (
    //         <View
    //           style={{
    //             flex: 1,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             padding: 5,
    //             // backgroundColor: '#fff',
    //           }}>
    //           <Image
    //             style={{
    //               width: '94%',
    //               height: '94%',
    //               borderRadius: 18,
    //               backgroundColor: '#e6e4e5',
    //             }}
    //             source={item.image}
    //             resizeMode={'contain'}
    //           />
    //         </View>
    //       )}
    //     />
    //   </View>













