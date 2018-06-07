/*
  Candra Darmawan
  email : chandra.souvenir@gmail.com
  Example of State in React Native Cli. V.2.0.1
*/
import React,{Component} from 'react';
import {Text,View} from 'react-native';

//React Native Component
 class Blink extends Component{
   //initialization function
   constructor(props){
     super(props);
     //state = private properties, can be change value and can only assign in constructor
     this.state = {
       showText : true
     }
     //Rigth of "=>" : implementation of Arrow function
     var taskToDo = () =>{
       //this.state don't allow, only in constructor
       //use "setState" to change state
       this.setState(previousState =>{
         return{
           showText : !previousState.showText
         };
       });

     }
     const timeToBlink = 1000; //1000 milisecond
     setInterval(taskToDo,timeToBlink);
   }

   render(){
     //After state change component is rendered
     let showToDisplay = this.state.showText ? this.props.inputText : ' ';
     return(
       <Text>{showToDisplay}</Text>
     );
   }
 }
//Public Component
 export default class TextBlink extends Component {
   render(){
     return(
       <View>
          <Blink inputText='Candra'></Blink>
          <Blink inputText='Darmawan'></Blink>
       </View>
     );
   }
 }
