
import { StyleSheet,View, Text,Pressable } from "react-native";
// function deleteGoalHandler(){
//     console.log('DELETE');
// }
// props.onDeleteItem
function GoalItem(props) {
    return (
        // console.log(props.id),
        
        
        <View style={styles.goalItem} >
            <Pressable android_ripple={{color:'#210644'}} onPress={props.onDeleteItem.bind(this,props.id)}
            style={({pressed})=>pressed && styles.pressedItem}
            >
            <Text style={styles.goalText} >
                {props.text}
            </Text>
            </Pressable>
        </View>
        
    );
};


export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        
        borderRadius: 6,
        backgroundColor: '#5e0acc',


    },
    pressedItem:{
        opacity:0.5
    },
    goalText: {
        padding:8,
        color: 'white'
    }
});
