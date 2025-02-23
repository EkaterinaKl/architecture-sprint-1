import React, {lazy} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

const AppUser = lazy(() => import('user/AppUser').catch(() => {
        return {default: () => <div className='error'>Component is not available!</div>};
    })
);
const AppCard = lazy(() => import('card/AppCard').catch(() => {
        return {default: () => <div className='error'>Component is not available!</div>};
    })
);

function App() {

    // В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста.
    const [currentUser] = React.useState({});

    return (
        // В компонент App внедрён контекст через CurrentUserContext.Provider
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page__content">
                <AppAuth></AppAuth>
                <AppUser></AppUser>
                <AppCard></AppCard>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
