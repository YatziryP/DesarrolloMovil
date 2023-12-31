import {  StyleSheet } from 'react-native';

export const RegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
      },
      secondSection:{
        flex:1,
        backgroundColor:"white", 
        width: "100%",
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        padding:20,
        justifyContent: "space-between"
      },
      label:{
        color: "#ccc"
      },
      textInput:{
        color: "#000",
        padding: 8,
        borderBottomWidth: 1.5, // Ajusta el grosor del subrayado aquí
        borderColor: "#1F9AEE", // Cambia el color del subrayado aquí
      },
      spacing:{
        marginTop:30,
      },
      button:{
        backgroundColor: "#d270db",
        padding: 15,
        borderRadius:30,
        alignItems: "center",
        textAlign: "center",
      },
      buttonText:{
        fontSize:20,
        color: "white",
        fontWeight: "bold",
      },
      row:{
        flexDirection:"row",
        justifyContent:"center",
    
      },
    
    login:{
        color: "#B81AC2",
        paddingLeft:5,
      },
      signupTop: {
        fontSize:30,
        color: "#000",
        textAlign: "left",
        width: "50%",
      },
    
      signupBottom: {
        fontSize:30,
          color: "#000",
          textAlign: "left",
          width: "60%",
      },
      subTittle:{
        fontSize : 12 ,
        color: "#ccc"
      },
      iconoPerfil:{
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#d270db",
        display: "flex",
        alignSelf: "flex-end",
        marginTop: -130,
      },
      galery:{
        backgroundColor: "#d270db",
        padding: 15,
        borderRadius:30,
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      },
})