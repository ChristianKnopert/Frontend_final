import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import NameHeader from "./components/Name-header/Name-header";
import Cryptoinfo from "./components/Cryptoinfo/Cryptoinfo"
import Footer from "./components/Footer/Footer";
import CryptoFinder from "./components/CryptoFinder/CryptoFinder";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
    return (

        <>
            <Router>
                <Header/>
                <NameHeader/>
                <Switch>
                    <Route exact path="/">
                <Cryptoinfo/>
                    </Route>
                    <Route exact path="/dashboard">
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                        <CryptoFinder />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
            </>

            );
            }

            export default App;
