import React, {useState} from 'react';

const Counter = function ()  {
    const [count, setCount]= useState(5)


    function increment() {
        setCount (count + 1);
        console.log(count)
    }
    function Decrement() {
        setCount (count - 1);
        // console.log(Likes)
    }
    return (


            <div>
                <h1>{count}</h1>

                <button onClick={increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
            </div>

    );
};

export default Counter;