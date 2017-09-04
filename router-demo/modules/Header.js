/**
 * Created by zhoulinzhu. on 17/8/21.
 */
import React,{ Component } from 'react'
import { Link } from 'react-router'
import CssModules from 'react-css-modules';
import styles from '../style/header.css';


class Header extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div styleName="nav">
                <div styleName="logo"><img src="../images/Bitmap.png"/></div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/news">新闻</Link></li>
                    <li><Link to="/footer">音乐</Link></li>
                    <li><Link to="/movies">视频</Link></li>
                </ul>
            </div>
        )
    }
}

export default CssModules(Header,styles);