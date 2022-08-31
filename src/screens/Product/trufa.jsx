import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Icon } from "@rneui/base";

import Button from '../../components/Button';
import Container from "../../components/Container";
import style from "./style";

import trufa from '../../assets/img/bolo-choco.png'

const Product = ({ navigation }) => {

  const [count, setCount] = useState(0);
  const mais = () => setCount(prevCount => prevCount + 1);
  const menos = () => setCount(prevCount => prevCount - 1);

  return (
    <Container>
      <View style={style.container}>
        <Icon
          name="west"
          type="material"
          size={28}
          color='#fff'
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#e05780",
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            padding: 18
          }}
        />
        <View style={style.top}>
          <Text style={style.title}>Bolo</Text>

          <Image source={trufa} style={style.img} />
        </View>

        <View style={style.bottom}>
          <Text>
          <Text style={{ fontSize: 20, fontWeight: "400"}}> Bolo</Text> {"\n"} {"\n"}
          <Text style={{ fontSize: 28, fontWeight: "bold" }}> Trufas Negras</Text>{"\n"} {"\n"}
          <Text style={{ fontSize: 22 }}>Bolo de cochocolate com recheio único de chocolate meio amargo com calda de ganache de creme de avelã e frutas na decoração.</Text>
          </Text>

          <View>
            <Text style={{ fontSize: 20 }}>Quantidade</Text>

            <View style={style.quant}>

              <TouchableOpacity onPress={menos} style={style.button1}>
                <Text style={style.textBtt}>-</Text>
              </TouchableOpacity>

              <Text style={{ fontSize: 22, color: "#e05780" }}>{count}</Text>

              <TouchableOpacity onPress={mais} style={style.button2}>
                <Text style={style.textBtt}>+</Text>
              </TouchableOpacity>

              <Text style={{
                fontSize: 40,
                fontWeight: "500",
                color: "#e05780"
              }}>
                R$ 59,99</Text>
            </View>
          </View>

          <Button title="Adicionar" onPress={() => navigation.navigate('Bag')}  />

        </View>

      </View>
    </Container>

  );
}

export default Product