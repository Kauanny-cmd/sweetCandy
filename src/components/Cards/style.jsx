import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: 170,
        flexDirection: "column-reverse",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        
    },top: {
        flex: 1,
        backgroundColor: '#e05780',
        padding: 14,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
       
    },
    bottom: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 14,
         borderBottomRightRadius: 8, 
        borderBottomLeftRadius: 8,
        flexDirection: "column",
        justifyContent: "space-between"
    }
    
});

export default styles;