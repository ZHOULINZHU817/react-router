/**
 * Created by zhoulinzhu. on 17/8/22.
 */
import React,{ Component } from 'react'
import CssModules from 'react-css-modules'
import styles from '../style/movies.css';
import $ from 'jquery';


class Movies extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    handleMousemove(event){
     let rate = this.refs.img2.width/this.refs.img1.width;
    }
    handleMouseover(event){
        this.refs.bigBox.style.display = 'block';
    }
    handleMouseout(){
        this.refs.bigBox.style.display = 'none';
    }
    render(){
        return(
            <div>
                <div styleName="orgindiv"
                     onMouseMove={this.handleMousemove.bind(this)}
                     onMouseOver={this.handleMouseover.bind(this)}
                     onMouseOut={this.handleMouseout.bind(this)}>
                    <img ref="img1" src="../images/an.jpg" alt=""/>
                    <div styleName="movediv"></div>
                </div>
                <div styleName="bigdiv" ref="bigBox">
                    <img ref="img2" src="../images/an.jpg" alt=""/>
                </div>
            </div>
        )
    }
}

export default CssModules(Movies,styles);