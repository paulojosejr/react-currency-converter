import React, { Component } from 'react'
import './Converter.css'

export default class Converter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currencyA_value: "",
            currencyB_value: 0
        }
        this.toConvert = this.toConvert.bind(this)
    }

    toConvert() {
        let from_to = `${this.props.currencyA}_${this.props.currencyB}`
        const key = '8618ee9789044d522aee'
        let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=${key}`

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json=>{
                let quotation = json[from_to]
                let currencyB_value = ( parseFloat(this.state.currencyA_value) * quotation).toFixed(2)
                this.setState({currencyB_value})
            })
    }

    render() {
        return (
            <div className="converter">
                <h2 className="boxHeader">{this.props.currencyA} to {this.props.currencyB}</h2>
                <input type="text" className="inputT" onChange={(event) => { this.setState({ currencyA_value: event.target.value }) }} />
                <input type="button" value="Convert" onClick={this.toConvert} className="buttonC"></input>
                <h2 className="result">{this.state.currencyB_value}</h2>
            </div>
        )
    }
}
