import React, { Component } from 'react'
import {Card} from 'antd'
import headImg from '../assets/images/4.jpg';
export default class AboutMe extends Component {
    render() {
        return (
            <Card className="about_me">
                <ul>
                    <div className="head_img"><img src={headImg} alt="" /></div>
                    <p><b>韦永愿</b></p>
                    <p><b>WEB前端工程师</b></p>
                    <p>yongyuan253015@gmail.com</p>
                    <p>读书，读自己！</p>
                </ul>
            </Card>
        )
    }
}