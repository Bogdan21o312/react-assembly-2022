import React from 'react';
import AppRouter from "./router/AppRouter";
import classes from "./assets/style/Style.module.scss"

const App = () => {
    return (
        <div className={classes.wrapper}>
            <AppRouter/>
        </div>
    );
};

export default App;