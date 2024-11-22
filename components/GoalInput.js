export default GoalInput;
import { useState } from 'react';
import { TextInput,StyleSheet,View,Button,Modal,Image } from "react-native";
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState(''); 
    function goalInputHandler(enteredText) {

        setEnteredGoalText(enteredText);
    };
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    console.log("Goal input");
    
    
    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image}
             source={require('../assets/images/goal.jpg') }
                // source = "../some/path/image.png"
             />
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHandler} 
                value = {enteredGoalText}
            />
            <View style={styles.buttonContainer}>
            <View style={styles.buttton}>
                <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
                </View>
                <View style={styles.buttton}>
                <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                </View>
            </View>
            
        </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:'#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        width: '100%',
        marginRight: 8,
        padding: 16,
    },
    image:{
        height:100,
        width:100,
        margin:20
    },
    buttonContainer:{
        marginTop:16,
     flexDirection   :'row'
    },
    buttton:{
        width:100,
        marginHorizontal:8
    }
});