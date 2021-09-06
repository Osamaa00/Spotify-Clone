import React, { createContext, useContext, useReducer } from 'react';


// prepare a data layer
export const DataLayerContext = createContext();

// create data layer
// children is the <App /> component in indexjs
// created the same structure like in indexjs
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={ useReducer( reducer, initialState ) } >
        { children }
    </DataLayerContext.Provider>
);

// to get a value from data layer or dispatch an action to it
// we need some kind of way to get access to it
export const useDataLayerValue = () => useContext(DataLayerContext);