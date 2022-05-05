import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";


function App() {

    const [value, setValue]= useState('текст - dr. kottok')
    // console.log(Likes)
    // console.log(setLikes)



    return (
        <div className="App">
            <ClassCounter/>
            <ClassCounter/>
            <ClassCounter/>
        </div>

    );
}
export default App;
