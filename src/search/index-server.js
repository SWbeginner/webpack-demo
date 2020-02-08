'use strict';

// import React from 'react';
// import largeNumber from 'large-number-wangcw';
// import './search.less';
// import image from './images/longzhu.jpg';
// import { func } from '../../common';

const React = require('react');
const largeNumber = require('large-number-wangcw');
const Image = require('./images/longzhu.jpg');
require('./search.less');

class Search extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }

    loadComponent() {
        import('./text.js').then((Text)=>{
            this.setState({
                Text: Text.default
            });
        })
    }

    render() {
        const { Text } = this.state;
        const addResult = largeNumber('1', '999');

        return (<div className="search-text">Search Textadd { addResult }
                    <img src={ Image } onClick={ this.loadComponent.bind(this) }/>
                    {
                        Text ? <Text/> : null
                    }
                </div>);
    }
}

module.exports = <Search />;