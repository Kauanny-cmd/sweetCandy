import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontSize: 24, 
        fontWeight: "700",
        textAlign:"center",
        padding: 15,
        top: -20,
        color:'#fff'
        
    },top: {
        flex: 1,
        backgroundColor: '#e05780',
        justifyContent:"center",
        alignItems:"center",
        alignContent:"space-between"
    },
    img:{
        width: 220,
        height: 170,
        top: -20
    },
    bottom: {
        flex: 2,
        backgroundColor: "#fff",
        padding: 18,
        flexDirection: "column",
        justifyContent:"space-between"
    },
    button1:{
        alignItems: "center",
        width:48,
        height:48,
        padding: 10,
        backgroundColor: '#96A3AB',
        color:"#313030",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    button2:{
        alignItems: "center",
        width:48,
        height:48,
        padding: 10,
        backgroundColor: '#e05780',
        color:"#313030",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    textBtt:{
        fontWeight:"bold",
        fontSize:30,
        top:-6
    },
    quant:{
        marginTop: 20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
});

export default styles;