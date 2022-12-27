import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import IndexPage from "./page/index";


export class MainRouter extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path={'/'} element={<IndexPage/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}