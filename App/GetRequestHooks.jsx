import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetRequestHooks() {
    const [totalReactPackages, setTotalReactPackages] = useState(null);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://api.npms.io/v2/search?q=react')
            .then(response => setTotalReactPackages(response.data.total));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">GET Request with React Hooks</h5>
            <div className="card-body">
                Total react packages: {totalReactPackages}
            </div>
        </div>
    );
}

export { GetRequestHooks };