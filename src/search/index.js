'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import image from './images/longzhu.jpg';
import { func } from '../../common';
import { a } from './tree-shaking';

if(false){
    a();
}

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
        const resultText = func();
        return (<div className="search-text">{ resultText } Search Text
                    <img src={ image } onClick={ this.loadComponent.bind(this) }/>
                    {
                        Text ? <Text/> : null
                    }
                </div>);
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
);