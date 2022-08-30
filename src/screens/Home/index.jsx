import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { Shadow } from 'react-native-shadow-2';

import Container from '../../components/Container';
import Input from '../../components/Input';
import Donut from '../../assets/img/donut.png'
import Cards from '../../components/Cards';

import style from './style';

import { Formik } from 'formik';


const initialValues = {
    itemSearch: " "
};

const Home = () => {
    return (
        <Container>
            <View style={{ flex: 1, paddingHorizontal: 18 }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 24, marginBottom: 14 }}> Seja Bem Vinde! {'\n'} Qual o pedido de hoje?</Text>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <Input
                                placeholder="Pesquisar"
                                leftIcon={{ type: 'evilicon', name: 'ei-search' }}
                                onChange={handleChange("itemSearch")}
                                onBlur={handleBlur("itemSearch")}
                                value={values.itemSearch}

                            />
                        )}
                    </Formik>

                </View>

                <Shadow stretch="false">
                    <View style={style.container} >

                        <View style={style.quadrado} >
                            <Text style={style.promoText}>Promoção</Text>
                            <Text style={{ fontSize: 22, fontWeight: "700" }}>TRI DONUTS</Text>
                            <Text style={{ fontSize: 17 }}>Combo</Text>
                            <Text style={{ fontSize: 30, color: "#e05780", fontWeight: "400" }}>R$ 18,99</Text>
                        </View>
                        <View style={style.lateral} />
                       
                    </View>
                </Shadow>
                <View style={style.produtos}>
                    <Cards
                        type='Fatia'
                        name="Creme de Coco"
                        price='R$ 6,00'
                    >
                       
                    </Cards>
                    <Cards
                        type='Fatia'
                        name="Creme de Coco"
                        price='R$ 6,00'
                    >
                       
                    </Cards>
                    <Cards
                        type='Fatia'
                        name="Creme de Coco"
                        price='R$ 6,00'
                    >
                        {<Image source={Donut} style={style.Img} />}
                    </Cards>
                    <Cards
                        type='Fatia'
                        name="Creme de Coco"
                        price='R$ 6,00'
                    >
                       
                    </Cards>
                    <Cards
                        type='Fatia'
                        name="Creme de Coco"
                        price='R$ 6,00'
                    >
                       
                    </Cards>
                    <Cards
                        type='Fatia'
                        name="Creme de Coco"
                        price='R$ 6,00'
                    >
                       
                    </Cards>
                </View>
            </View>

        </Container>
    );
}


export default Home;