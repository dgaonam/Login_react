import { useReducer } from "react";
import { createContext } from "react";
import StoreReducer, { initialStore } from "./StoreReducer";

const StoreContext = createContext();

const StoreProvider = ({children})=>{
    const [state,dispatch] = useReducer(StoreReducer,initialStore);
    return(
        <StoreContext.Provider value={[state,dispatch]}>
            {children}
        </StoreContext.Provider>
    );
};
export {StoreContext}
export default StoreProvider;