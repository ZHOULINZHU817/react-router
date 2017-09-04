/**
 * Created by zhoulinzhu. on 17/8/21.
 */
import React,{ Component } from 'react'
var ReactHighcharts = require('react-highcharts')
var HighchartsMore = require('highcharts-more');
HighchartsMore(ReactHighcharts.Highcharts);

// Highcharts exporting
var HighchartsExporting = require('highcharts-exporting');
HighchartsExporting(ReactHighcharts.Highcharts);
import Header from '../modules/Header'
var config = {
    chart: {
        polar: true
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
};


class Footer extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <ReactHighcharts height={400} config={config}></ReactHighcharts>
            </div>
        )
    }
}

export default Footer;