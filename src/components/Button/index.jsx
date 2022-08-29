import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Icon } from "@rneui/base";

import styles from "./style";

const Button = ({ title, link, ...rest }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: link ? "transparent" : '#e05780',
      }}
      {...rest}
    >
      <Text
        style={{
          ...styles.titleButton,
          color: link ? '#e05780' : '#FFF',
        }}
      >
        {title}
      </Text>
      {link ? (
        <Icon
          name="arrow-forward"
          type="material"
          size={18}
          color='#e05780'
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;