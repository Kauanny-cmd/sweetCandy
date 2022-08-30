import { View, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";

import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/img/logo.png';

const initialValues = {
    email: "",
    password: "",
};

const SinginSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Obrigatório"),
    password: Yup.string().min(8, "Senha invalida").required("Obrigatório"),
});

const Login = ({ navigation }) => {
    return (

        <Container>

            <Formik
                initialValues={initialValues}
                validationSchema={SinginSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, }) => (

                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 18 }}>
                        <View style={{ alignItems: 'center', marginBottom: 42 }}>
                            <Image source={Logo} />
                        </View>
                        <Input placeholder="Email" onChange={handleChange("email")} onBlur={handleBlur("email")} value={values.email}
                            error={errors.email && touched.email ? errors.email : undefined} />
                        <Input placeholder="Senha" onChange={handleChange("password")} onBlur={handleBlur("password")} value={values.password}
                            error={errors.password && touched.password ? errors.password : undefined} password />
                        <TouchableOpacity style={{ marginTop: 12 }} onPress={() => handleSubmit()} >
                            <Button title="Login" onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Home' }],
                                })
                            }} />
                        </TouchableOpacity>
                        <Button title="Quero me cadastrar" link
                            onPress={() => navigation.navigate('Register')}
                        />
                    </View>
                )}
            </Formik>
        </Container>
    );
}

export default Login;