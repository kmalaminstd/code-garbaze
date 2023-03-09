import { useState, useEffect  } from "react"

function CounterF(){

    const [count, setCount] = useState(0)

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log(count);
            setCount(count + 1)
       }, 1000)

       return()=>{
        clearInterval(timer)
       }

    },[count])

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const resetFunc = () => {
        setCount(0)
    }

    return(
        <>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={resetFunc}>Reset</button>
        </>
    )
}

export default CounterF