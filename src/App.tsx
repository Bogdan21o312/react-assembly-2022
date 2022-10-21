import React from 'react';
import {testAPI} from "./sevices/test";

const App = () => {
    const {data: test, isLoading, error} = testAPI.useFetchAllTestQuery('')

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h2>Error...</h2>}
            {test && test.map(test =>
                <div key={test.id}>
                    {test.id}
                    {test.body}
                </div>
            )}

        </div>
    );
};

export default App;