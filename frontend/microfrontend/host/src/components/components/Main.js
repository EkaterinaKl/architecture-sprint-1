import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({}) {
  const currentUser = React.useContext(CurrentUserContext);

  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

  return (
    <main className="content">
    </main>
  );
}

export default Main;
