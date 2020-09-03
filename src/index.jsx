import React from 'react'
import {render} from 'react-dom'
//import * as $ from 'jquery'
import Post from './post'
import xml from './assets/note.xml'
import json from './assets/file.json'
import csv from './assets/addresses.csv'
import './babel'
import './style/style.css'
import './style/style-less.less'
import './style/style-scss.scss'

const post = new Post('new title')

// $('.block-json').text(post.toString())

function App() {
    return (
        <div className="container">
            <h1>Webpack config</h1>
            <div className="block"/>

            <hr/>
            <pre className="block-json"/>
            <div className="block-analytics"/>
            <hr/>

            <div className="block-less">
                <h2>LESS</h2>
            </div>
            <div className="block-scss">
                <h2>SCSS</h2>
            </div>
        </div>
    )
}

render(<App/>, document.getElementById('root'))

console.log('post', post.toString())
console.log('xml', xml)
console.log('json', json)
console.log('csv', csv)