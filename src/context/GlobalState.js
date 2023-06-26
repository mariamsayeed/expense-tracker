import React, { createContext, useReducer,useState} from 'react';
import AppReducer from './AppReducer'

// initial state
const initialState = {
    transactions: []
}

// create context
export const GlobalContext =  createContext(initialState);

//provider component
export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [amount, setAmount] = useState(0);
    //Actions
    function deleteTransaction (id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction (transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        amount,
        setAmount
    }}>
        {children}
    </GlobalContext.Provider>)
}