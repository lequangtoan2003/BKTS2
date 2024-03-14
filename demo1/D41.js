import React from "react";
import {Text, View, TextInput, StyleSheet} from 'react-native';
export default class D41 extends React.Component{
    constructor()
    {
        super();
        this.thongbao="";
        this.state={
            a:0,
            b:0,
            
        }
    }
    _setA(t){
        this.setState({
            a:t,
        });
    }
    _setB(t){
        this.setState({
            b:t,
        });
    }
    // _setC(t){
    //     this.setState({
    //         c:t,
    //     });
    // }
    _giaiPTB1(a,b){
        let delta = -b/a;
        if(delta==0) {
            this.thongbao="phuong trinh vo nghiem";

            return this.thongbao;
        }else{
            return delta.toString();
            // this.thongbao= delta;
            return this.thongbao;

        }

    }


    render()  {
        return(
            <View style={styles.container}>
                <View style={styles.phan1}>
                    <TextInput value={this.state.a} onChangeText={(txt) => this._setA(txt)}/>
                </View>
                <View style={styles.phan2}>
                    <TextInput value={this.state.b} onChangeText={(txt) => this._setB(txt)}/>
                </View>
                {/* <View style={styles.phan3}>
                    <TextInput value={this.state.c} onChangeText={(txt) => this._setC(txt)}/>
                </View> */}
                <View style={styles.phan4}>
                    <Text style={styles.chu}>Tong la: {this._giaiPTB1(this.state.a,this.state.b)}</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    chu:{
        fontSize:30,
        flexDirection:'column'
    },
    container:{
        flex:1,
        flexDirection:'column'
    },
    phan1:{
        flex:1,
        alignItems:'streth',
        justifyContent:'center',
        backgroundColor:'yellow',
    },
    phan2:{
        flex:1,
        alignItems:'streth',
        justifyContent:'center',
        backgroundColor:'green',
    },
    phan3:{
        flex:1,
        alignItems:'streth',
        justifyContent:'center',
        backgroundColor:'yellow',
    },
    phan4:{
        flex:1,
        alignItems:'streth',
        justifyContent:'center',
        backgroundColor:'green',
    },
});
