/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
import React from "react"

class Counter extends React.Component{

    constructor(){
        super()
        this.state = {
            count: 0,
        }
    }

    static getDerivedStateFromProps(){
        console.log('Derived M')
        return null
    }

    shouldComponentUpdate(){
        console.log('Should Component Update');
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('Snapshot');
        return null
    }

    componentDidUpdate(){
        console.log('Component Did Update');
    }

    increment = () =>{
        this.setState((prev) => {
            return{
                count: prev.count + 1
            }
        })
    }

    decrement = () => {
        this.setState((prev) => {
            return{
               count: prev.count - 1 
            }
            
        })
    }

    resetFunc = () => {
        this.setState({
            count: 0
        })
    }

    render(){
        console.log('render');
        const { count} = this.state

        return(
            <>
                <h3>Count: {count}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.resetFunc}>Reset</button>
            </>
        )
    }
}

export default Counter