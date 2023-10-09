import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsIcon from "react-native-vector-icons/Octicons";
import ZocialIcon from "react-native-vector-icons/Zocial";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather"

// export const IconTypes = {
//     "MaterialIcons": MaterialIconsIcon,
//     "FontAwesome": FontAwesomeIcon,
//     "Entypo": EntypoIcon,
//     "Fontisto": FontistoIcon,
//     "Octicons": OcticonsIcon,
//     "Zocial": ZocialIcon,
//     "MaterialCommunityIcons": MaterialCommunityIcons,
//     "Ionicons": IoniconsIcon,
//     "EvilIcons": EvilIconsIcon,
//     "SimpleLineIcons": SimpleLineIconsIcon
// }

const getIconFont = (type) => {
    switch (type) {
        case "MaterialIcons": 
            return MaterialIconsIcon;
        case "FontAwesome": 
            return FontAwesomeIcon;
        case "Entypo": 
            return EntypoIcon;
        case "Fontisto": 
            return FontistoIcon;
        case "Octicons": 
            return OcticonsIcon;
        case "Zocial": 
            return ZocialIcon;
        case "MaterialCommunityIcons": 
            return MaterialCommunityIcons;
        case "Ionicons": 
            return IoniconsIcon;
        case "EvilIcons": 
            return EvilIconsIcon;
        case "SimpleLineIcons": 
            return SimpleLineIconsIcon;
        case "Feather": 
            return Feather;
        default: 
            return MaterialCommunityIcons;
    }
}


const Icon = ({type, ...props}) => {
    const FontIcon = getIconFont(type)
    return <FontIcon {...props} />;
}

export default Icon

