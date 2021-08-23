import React from "react";
import styled from "styled-components";


const styleResource = {
    width: '100%',
    height: '100%',

    margin: '0',
    padding: '0',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',

    backgroundColor: 'rgba(255, 255, 255, 0.2)',
}


class Resource extends React.Component {
    render() {
        <li class="resource" style={styleResource}>
            <div class="card-pile diamond">
                <div class="numbers_sheet number" data-number="0"></div>
            </div>
            <div class="coin-pile token type_diamond">
                <div class="numbers_sheet number" data-number="0"></div>
            </div>
        </li>
    }
}