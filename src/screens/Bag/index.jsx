import { View, Text, Image, TouchableOpacity, ScrollView , TextInput} from "react-native";
import { useState } from "react";
import { Icon } from "@rneui/base";
import { Shadow } from "react-native-shadow-2";


import Button from '../../components/Button';
import Container from "../../components/Container";
import style from "./style";

import donut from '../../assets/img/donut.png'
import creme from '../../assets/img/bolo-creme.png'
import trufa from '../../assets/img/bolo-choco.png';

const Product = ({ navigation }) => {

  const [number, onChangeNumber] = useState(null)
  const [count, setCount] = useState(2);
  const mais = () => setCount(prevCount => prevCount + 1);
  const menos = () => setCount(prevCount => prevCount - 1);

  return (
    <Container>
      <ScrollView >
      <Icon
        name="west"
        type="material"
        size={28}
        color='#e05780'
        onPress={() => navigation.goBack()}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          padding: 18
        }}
      />
      <View style={style.container}>

<Text style={style.title}>Sacola</Text>

        <Shadow stretch="false" style={style.produto}>
          <View>
            <Image source={donut} style={style.img} />
            <View style={style.describle}>
              <Text>
                <Text style={{ fontSize: 12, fontWeight: "400" }}> Combo</Text> {"\n"} {"\n"}
                <Text style={{ fontSize: 18, fontWeight: "bold" }}> Tri Donuts</Text>{"\n"} {"\n"}
                <Text style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: "#e05780"
                }}>
                  R$ 18,99</Text>
              </Text>
            </View>

            <View style={style.quant}>
              <TouchableOpacity onPress={menos} style={style.button1}>
                <Text style={style.textBtt}>-</Text>
              </TouchableOpacity>

              <Text style={style.count}>{count}</Text>

              <TouchableOpacity onPress={mais} style={style.button2}>
                <Text style={style.textBtt}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Shadow>

        <Shadow stretch="false" style={style.produto}>
         <View style={{justifyContent:"center"}}>

           <Image source={creme} style={style.img} />

           <View style={style.describle}>
             <Text>
               <Text style={{ fontSize: 12, fontWeight: "400" }}> Fatia</Text> {"\n"} {"\n"}
               <Text style={{ fontSize: 18, fontWeight: "bold" }}> Creme de {"\n"} Coco</Text>{"\n"} {"\n"}
               <Text style={{
                 fontSize: 20,
                 fontWeight: "500",
                 color: "#e05780"
               }}>
                 R$ 6,00</Text>
             </Text>
           </View>

           <View style={style.quant}>
             <TouchableOpacity onPress={menos} style={style.button1}>
               <Text style={style.textBtt}>-</Text>
             </TouchableOpacity>

             <Text style={style.count}>{count}</Text>

             <TouchableOpacity onPress={mais} style={style.button2}>
               <Text style={style.textBtt}>+</Text>
             </TouchableOpacity>
           </View>

         </View>
       </Shadow>

       <Shadow stretch="false" style={style.produto}>
         <View>

           <Image source={trufa} style={style.img} />

           <View style={style.describle}>
             <Text>
               <Text style={{ fontSize: 12, fontWeight: "400" }}> Bolo</Text> {"\n"} {"\n"}
               <Text style={{ fontSize: 18, fontWeight: "bold" }}> Trufas {"\n"} Negras</Text>{"\n"} {"\n"}
               <Text style={{
                 fontSize: 20,
                 fontWeight: "500",
                 color: "#e05780"
               }}>
                 R$ 59,00</Text>
             </Text>
           </View>

           <View style={style.quant}>
             <TouchableOpacity onPress={menos} style={style.button1}>
               <Text style={style.textBtt}>-</Text>
             </TouchableOpacity>

             <Text style={style.count}>{count}</Text>

             <TouchableOpacity onPress={mais} style={style.button2}>
               <Text style={style.textBtt}>+</Text>
             </TouchableOpacity>
           </View>

         </View>
       </Shadow>

<View>
<Text style={{fontSize: 18, marginBottom: 18}}>Calcule o frete e prazo</Text>

<TextInput 
style={style.input}
onChangeNumber={onChangeNumber}
value={number}
keyboardType="numeric"/>

</View>

       <Shadow stretch="false" style={style.produto}>
        
           <View>
             <Text>
               <Text style={{ fontSize: 12, fontWeight: "400"}}> Rua Joaquim Luís, 40, Centro</Text> {"\n"} 
               <Text style={{ fontSize: 18, fontWeight: "bold" }}> Receba em até 40 min</Text>
             </Text>
           </View>
            <View style={{position:"absolute", left:244, top:22}}>
           <Text style={{
                 fontSize: 20,
                 fontWeight: "500",
                 color: "#e05780"
               }}>
                 R$ 59,00</Text>
         </View>
       </Shadow>

       <Shadow stretch="false" style={style.produto}>
        
        <View>
          <Text>
            <Text style={{ fontSize: 12, fontWeight: "400"}}>Subtotal</Text> {"\n"}   {"\n"} 
            <Text style={{ fontSize: 12, fontWeight: "400"}}>Frete</Text> {"\n"}  {"\n"} 
            <Text style={{ fontSize: 18, fontWeight: "bold" }}> Total</Text>
          </Text>
        </View>
         <View style={{position:"absolute", left:244, top:22}}>
        <Text style={{
              fontSize: 16,
              fontWeight: "500",
            }}>
             R$ 150,97  </Text>

             <Text style={{
              fontSize: 16,
              fontWeight: "500",
            }}>
             R$ 10,75  </Text>

              <Text style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#e05780"
            }}>
              R$ 161,72</Text>
      </View>
    </Shadow>

        <Button title="Continuar" onPress={() => navigation.navigate('Bag')} />

      </View>


      </ScrollView>
    </Container>

  );
}

export default Product