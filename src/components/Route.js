import React, {useEffect, useState} from 'react';


const Route = ({ path, children }) => {
    //get the Route to update
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname) //tracks whatever pathname is
        }
        window.addEventListener('popstate', onLocationChange);

        //cleanup function
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []); //empty array means we run it only once
    //current path is window.location.pathname
    return currentPath === path ? children : null; // should the Route compo show its child or hide it?
}

export default Route;