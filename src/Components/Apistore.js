import React from "react";
import { createStoreHook } from "react-redux";
import { createStore ,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { ApiReducer } from "./ApiReducer";
import { CartReducer } from "./CartReducer";



const combreducer=combineReducers({apiReducer:ApiReducer,cartReducer:CartReducer});
export const apistore=createStore(combreducer,applyMiddleware(thunk));