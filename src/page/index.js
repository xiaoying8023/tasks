import React from "react";
import {DatePicker} from "antd";

const {MonthPicker,RangePicker,WeekPicker } = DatePicker;


export default class IndexPage extends React.Component{

    onChange(date,dataString){
        console.log(date,dataString);
    }

    render() {
        return(
            <div>
                <DatePicker onChange={this.onChange}/>
                <br/>
                <MonthPicker onChange={this.onChange} placeholder="select month"/>
                <br/>
                <WeekPicker onChang={this.onChange()}/>
                <br/>
            </div>
        )
    }
}