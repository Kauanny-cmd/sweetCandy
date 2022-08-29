import { View, Text } from "react-native";
import styles from "./style";
import { Input as InputUI } from "@rneui/themed";


const Input = ({
    label,
    placeholder,
    password,
    value,
    error,
    onChange,
    onBlur,
}) => {
    return (
        <View style={styles.inputContainer}>
            {label ? <Text style={styles.InputLable}>{label}</Text> : null}
            <InputUI
                placeholder={placeholder ? placeholder : ""}
                secureTextEntry={password}
                style={styles.input}
                inputContainerStyle={styles.disable}
                containerStyle={styles.disable}
                onChangeText={(e) => onChange(e)}
                onBlur={(e) => onBlur(e)}
                value={value}
                errorMessage={error}
              
            />
        </View>
    );
};

export default Input;