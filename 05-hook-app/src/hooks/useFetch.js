import { useEffect, useState } from "react"

const initialState = {
    data: null,
    isLoading: true,
    hasError: false,
    error: null
}

export const useFetch = (url) => {
    const [state, setState] = useState(initialState);

    const setLoadingState = () => setState(initialState);

    const getFetch = async () => {    
        setLoadingState();
        const resp = await fetch(url);
        // ?? sleep
        await new Promise( resolve => setTimeout(resolve, 1500) );

        if (!resp.ok) {
            setState({
                ...state, 
                hasError: true, 
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            })
            return;
        }

        const data = await resp.json();
        setState({ ...state, data, isLoading: false });    
    } 



    useEffect(() => {
        getFetch(); 
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
  
}
