import { View, Text } from 'react-native';

import { Shadow } from 'react-native-shadow-2';

import styles from './style';

const Cards = ({type, name, price}) => {
    return(
        <View>
            <Shadow stretch="false">
        <View style={styles.container} >

            <View style={styles.bottom} >
                <Text style={{ fontSize: 10}}>{type}</Text>
                <Text style={{ fontSize: 14, fontWeight: "700" }}>{name}</Text>
                <Text style={{ fontSize: 14, color: "#e05780", fontWeight: "400" }}>{price}</Text>
            </View>
            <View style={styles.top} />
        </View>
    </Shadow>
        </View>
    )
};
export default Cards;