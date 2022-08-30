import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 162,
        flexDirection: "row",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    quadrado: {
        flex: 2,
        backgroundColor: "#fff",
        padding: 14,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    lateral: {
        flex: 1,
        backgroundColor: '#e05780',
        padding: 14,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8, 
    },
    promoText: {
        fontSize: 10,
        backgroundColor: "#e05780",
        padding: 5,
        borderRadius: 4,
        color: "#F8F9FA",
        width: 60
    },
    Img:{
        width: 160, 
        height: 160,
        position:"absolute",
        left: 155
    },
    produtos:{
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        alignContent:"space-between",
    },

});

export default styles;