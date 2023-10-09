import React, {useEffect, useRef} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icon from '../Custom/Icons'
import * as Animatable from 'react-native-animatable';

const BottomTabBar = ({...props}: any) => {
    const {item , onPress, accessibilityState} = props
    const focused = accessibilityState.selected;
    const viewRef = useRef<any>(null);

    useEffect( () => {
        if (focused) {
            viewRef.current.animate({0: {scale: 1.1, rotate: "0deg",}, 1: {scale: 1.4, rotate: "360deg",}})
        } else {
            viewRef.current.animate({0: {scale: 1.4, rotate: "360deg",}, 1: {scale: 1.1, rotate: "0deg",}})
        }
    },[focused])

    return (
        <TouchableOpacity onPress={onPress} 
            style={[styles.container, {backgroundColor: focused ? "#fff" : "#fff"}]}>
            <Animatable.View
                duration={700}
                ref={viewRef}
                style={{flex:1,justifyContent: "center",alignItems: "center"}}
            >
                <Icon type={item.type} color={focused ? 'orange' : "#161a25"} name={focused ? item.activeIcon : item.inactiveIcon} size={24}  />            
            </Animatable.View>
        </TouchableOpacity>
    )
}

export default BottomTabBar

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
        marginHorizontal: 18,
        marginVertical: 8,
        // top:0.6
        // height: 44,
        // width: 44,
        // borderRadius: 10,
        // borderRadius: 30,
    }
})
