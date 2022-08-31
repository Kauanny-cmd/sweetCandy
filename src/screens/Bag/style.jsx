import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft: 18,
        marginRight: 18,
        marginTop: 18

    },
    title:{
        fontSize: 24, 
        fontWeight: "700",
        textAlign:"center",
        padding: 15,
        top: -30,
        color:'#313030'
        
    },
    img:{
        width: 90,
        height: 70,
        position:"absolute",
        top: 14,
        left: -4
    },
    produto:{
        display:"flex",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 16,
        paddingBottom:16,
        marginBottom: 18,
        borderRadius: 3,
        
    },
    button1:{
        alignItems: "center",
        width:38,
        height:38,
        padding: 10,
        backgroundColor: '#96A3AB',
        color:"#313030",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    button2:{
        alignItems: "center",
        width:38,
        height:38,
        padding: 10,
        backgroundColor: '#e05780',
        color:"#313030",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    textBtt:{
        fontWeight:"bold",
        fontSize:18,
        top:-6
    },
    quant:{
        marginTop: 20,
        flexDirection:"row",
        alignItems:"center",
        position:"absolute",
        left: 210,
        top: 12
    },
    count:{ 
        fontSize: 22, 
        color: "#e05780", 
        marginLeft: 14, 
        marginRight:14,
    },
    describle:{
        flexDirection:"column",
        left: 106
    },
    input:{
        height: 45,
    borderWidth: 1,
    padding: 15,
    borderRadius:3,
    borderColor:'#e05780',
    marginBottom: 18
    }
});

export default styles;