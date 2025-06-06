import { createContext, useState } from "react";

//global data
export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [ account, setAccount ] = useState({ name: '', username: '' });
        
    return (
        <DataContext.Provider value={{ 
            account, 
            setAccount 
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;