import { SafeAreaView, Platform, StatusBar} from "react-native";

const Container = ({children}) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#FFF',
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }}
        >
            {children}
        </SafeAreaView>
    );
}

export default Container;