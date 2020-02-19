import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return <div>Hello World</div>
    }
}

ReactDOM.render(<App />, document.querySelector("#app"))

async function getComponent() {
    const { default:_ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
    const element = document.createElement("div")
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
}

getComponent().then(component => {
    document.body.appendChild(component);
});