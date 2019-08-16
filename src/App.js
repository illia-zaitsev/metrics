import React from 'react';
import {createStore} from 'redux';

import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import {storeReducer} from "./reducer/storeReducer";
import AppProvider from "./lib/provider";

export default function App() {

    const store = createStore(storeReducer);

    return (
        <AppProvider store={store}>
            <Header/>
            <Content/>
            <Footer/>
        </AppProvider>
    )
}
