import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
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

const Home = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
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

                    <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                        <Shadow stretch="false">
                            <View style={style.container}>
                                <View style={style.quadrado} >
                                    <Text style={style.promoText}>Promoção</Text>
                                    <Text style={{ fontSize: 22, fontWeight: "700" }}>TRI DONUTS</Text>
                                    <Text style={{ fontSize: 17 }}>Combo</Text>
                                    <Text style={{ fontSize: 30, color: "#e05780", fontWeight: "400" }}>R$ 18,99</Text>
                                </View>
                                <View style={style.lateral} />
                                <Image source={Donut} style={style.Img} />
                            </View>
                        </Shadow>
                    </TouchableOpacity>

                    <View style={style.produtos}>
                        <TouchableOpacity onPress={() => navigation.navigate('Product1')}>
                            <Cards
                                type='Fatia'
                                name="Creme de Coco"
                                price='R$ 6,00'
                                img={require('../../assets/img/bolo-creme.png')}
                            />
                           
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Product2')}>
                            <Cards
                                type='Bolo'
                                name="Trufas Negras"
                                price='R$ 59,99'
                                img={require('../../assets/img/bolo-choco.png')}
                                
                                onSubmit={(
                                    type,
                                    name
                                ) => navigation.Product}
                            />
                           
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Cards
                                type='Bolo'
                                name="Pote Doce"
                                price='R$ 10,00'
                                img={require('../../assets/img/bolo-pote.png')}
                            />
                           
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Cards
                                type='Doce'
                                name="Bem Casado"
                                price='R$ 3,00'
                                img={require('../../assets/img/bem-casado.png')}
                            />
                           
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Cards
                                type='Doce'
                                name="Brigadeiro"
                                price='R$ 1,50'
                                img={require('../../assets/img/brigadeiro.png')}
                            />
                           
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Cards
                                type='Doce'
                                name="Quindim"
                                price='R$ 3,00'
                                img={require('../../assets/img/quindin.png')}
                                
                            />
                        </TouchableOpacity>

                    </View>

                </View>

            </Container>
        </ScrollView>

    );
}


export default Home;