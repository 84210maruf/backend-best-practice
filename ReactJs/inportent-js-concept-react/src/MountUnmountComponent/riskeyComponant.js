import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
    useEffect(() => {
        console.log('Component mounted: TimerComponent is now active.');

        // Setting up an interval timer
        const timer = setInterval(() => {
            console.log('Timer running...');
        }, 1000);

        //Missing Cleanup function for unmounting
        // return () => {
        //     clearInterval(timer);
        //     console.log('Component unmounted: TimerComponent is removed.');
        // };
       
    }, []); // Empty dependency array ensures this runs only on mount and unmount

    return <div>TimerComponent is running. Check the console!</div>;
};

const RiskeyComponant = () => {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <div className='p-4'>
            <p>Riskey Component coz its mounted but not unmounted on DOM</p>
            <button  className='bg-cyan-200 p-2 rounded-full' onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? 'Hide Timer' : 'Show Timer'}
            </button>
            {showTimer && <TimerComponent />}
            <hr />
        </div>
    );
};

export default RiskeyComponant;
