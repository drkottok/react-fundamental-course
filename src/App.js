import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import './styles/App.css';

function App() {




    return (
        <div className="App">
            <PostItem post= {{id: 1, title:'javascrupt1', body: 'Deskription1'}}/>
            <PostItem post= {{id: 2, title:'javascrupt2', body: 'Deskription2'}}/>
            <PostItem post= {{id: 3, title:'javascrupt3', body: 'Deskription3'}}/>
        </div>

    );
}
export default App;
