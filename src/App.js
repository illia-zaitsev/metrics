import React from 'react';
import {createStore} from 'redux';

import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import {storeReducer} from "./reducer/storeReducer";
import {createEffects} from "./lib/createEffects";
import {effectsReducer} from "./reducer/effectsReducer";

function App() {

    const   store = createStore(storeReducer),
            effects = createEffects(effectsReducer, store.dispatch);

    return (
        <AppContext.Provider value={{store, effects}}>
            <Header/>
            <Content/>
            <Footer/>
        </AppContext.Provider>
    )
}

export const AppContext = React.createContext('');
export default App;
