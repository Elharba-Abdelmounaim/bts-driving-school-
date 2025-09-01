import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:"#fff",
        position: 'relative'  
    },

    navGroup: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 1
    },

    largeText: {
        fontSize: 40,
        fontWeight: 700,
    },

    smallText: {
        fontSize: 12,
        color: '#7E7B7B'
    },

    placeholderText: {
        fontSize: 18,
        color: '#7E7B7B',
        marginBottom: 7,
    },

    inputField: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        borderColor: '7E7B7B',
        paddingHorizontal: 10,
    },

    passwordGroup: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        height: 50, 
        paddingHorizontal: 10,
        borderColor: '7E7B7B',   
    },

    formGroup: {
        marginTop: 44
    },

    forgotPasswordText: {
        fontSize: 17,
        marginTop: 9,
        textAlign :'right',
        color: '#34967C'
    },


    button: {
        backgroundColor: '#2B876E',
        height: 53,
        borderRadius: 10,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText:{
        fontSize: 17,
        color: 'white'
    },


    socialMediaButton: {
        borderWidth :1,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    socialMediaButtonText: {
        fontSize: 18,
        color: '#0D0D0D',
        fontWeight:400
    },

    socialMediaButtonGroup: {
        gap: 15,
        marginTop: 20
    },


    dividerGroup:{
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
        marginTop:11,
    },

    divider:{
        borderWidth:0.5,
        borderBlockColor:"#c2c2c2",
        flex:1,
    },

    dividerText:{
        fontSize:17,
        color: "#c2c2c2"
    },

    subTextGroup:{
        flexDirection:'row',
        position:'absolute',
        bottom:20,
        left:77,
        right:76,
    },

    subText:{
        fontSize:18,
        color:'#b5b5b5'
    },

    subTextJoin:{
        fontSize:18,
        color:'#FFA800',
        fontWeight:600,
    }
});

export {
    styles
};
