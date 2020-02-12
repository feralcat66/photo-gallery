import React, { Component } from 'react';
import images from './data.js'

export default class ImageList extends Component {

    // eslint-disable-next-line react/require-render-return
    render() {
        images.map((image)=>{
            return <li>
            <span>
                {image.url}
                {image.title}
                {image.description}
                number of horns {image.horns}
                {image.keyword}
                </span>
            </li>
        })}}