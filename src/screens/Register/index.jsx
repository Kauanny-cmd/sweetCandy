import { View, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";

import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/img/logo.png';

const initialValues = {
    name: " ",
    email: "",
    password: "",
};

const SingUpSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().required("Obrigatório"),
    password: Yup.string().min(8, "Senha invalida").required("Obrigatório"),
});

const Register = ({ navigation }) => {
    return (
        <Container>

            <Formik
                initialValues={initialValues}
                validationSchema={SingUpSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, }) => (

                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 18 }}>
                        <View style={{ alignItems: 'center', marginBottom: 42 }}>
                            <Image source={Logo} />
                        </View>
                        <Input placeholder="Nome" onChange={handleChange("name")} onBlur={handleBlur("name")} value={values.name} />
                        <Input placeholder="Email" onChange={handleChange("email")} onBlur={handleBlur("email")} value={values.email}
                            error={errors.email && touched.email ? errors.email : undefined} />
                        <Input placeholder="Senha" onChange={handleChange("password")} onBlur={handleBlur("password")} value={values.password}
                            error={errors.password && touched.password ? errors.password : undefined} password />
                        <TouchableOpacity style={{ marginTop: 12 }}
                            onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Home' }],
                                })
                            }} >
                            <Button title="Registro" onPress={() => handleSubmit()} />
                        </TouchableOpacity>
                        <Button title="Tem conta? Faça login" link onPress={() => navigation.navigate('Login')} />
                    </View>
                )}
            </Formik>
        </Container>
    );
}

export default Register;