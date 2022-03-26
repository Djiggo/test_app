import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "@/features/Home/HomePage";
import {AuthPage} from "@/features/Auth/AuthPage";
import React from "react";
import {ROUTE} from "@/router/interfaces";


export const Router = () => <BrowserRouter>
  <Routes>
    <Route path={ROUTE.HOME} element={<HomePage/>}/>
    <Route path={ROUTE.AUTH} element={<AuthPage/>}/>
  </Routes>
</BrowserRouter>