import React from 'react'

const Header = ({pageActive, handleBack}) => (
  <header className="header">
    {pageActive === 'checkout' && <button className="header__button header__button--back" onClick={handleBack}> 〈 </button>}
    <h1 className="header__title">Assine o Sexlog VIP</h1>
    <button className="header__button"> ✕ </button>
  </header>
)

export default Header
