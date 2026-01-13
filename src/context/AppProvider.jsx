import React,{useState, useEffect} from 'react'
import { AppContext } from './AppContext'
import PatientData from '../components/api/PatientData.js'



export function AppProvider({ children }) {
        const [patientdata, setPatientdata] = useState(null);

        useEffect(() => {
            async function fetchData() {
            const data = await PatientData(); 
            setPatientdata(data);
            }
            fetchData();
        }, []);

        return (
            <AppContext.Provider value={{ patientdata }}>
            {children}
            </AppContext.Provider>
        );
    }

export default AppProvider
