/**
 * Created by zhoulinzhu. on 17/8/21.
 */
import React,{ Component } from 'react';
import Header from '../modules/Header';
import CssModules from 'react-css-modules'
import styles from '../style/home.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div styleName="main">
                <Header />
                {this.props.children ||
                <div>
                    <div styleName="banner"></div>
                    <div styleName="conter">坎坎坷坷</div>
                </div>
                }
            </div>
        )
    }
}

export default CssModules(Home,styles)