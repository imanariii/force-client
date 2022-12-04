import { Header, BottomNav, ContentNav } from "../components";
import { Api } from "../context/Api";
import React, { useState } from 'react';

const AdminPanelPage = () => {
  const [value, setValue] = useState('recents');
  const handleChange = (event, newValue) => setValue(newValue);
  return (
    <Api.Consumer>
      {context => (
        context.user &&
        <>
          <Header />
          <main>
            <div className={`sign__wrapper-${context.theme}`}>
                <h1>Админ панель</h1>
                <div className={`sign__body-${context.theme}`}>
                  <BottomNav handleChange={handleChange} value={value} />
                </div>
                <div className={`sign__body-${context.theme}`}>
                  <ContentNav value={value} />
                </div>
            </div>
          </main>
          <Header />
        </>
      )}
    </Api.Consumer>

  )
}

export default AdminPanelPage;