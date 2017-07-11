import React from 'react'

const Header = ({pageActive, handleBack}) => (
  <header className="header">
    {pageActive === 'checkout' && <button className="header__button header__button--back" onClick={handleBack}> 〈 </button>}
    <h1 className="header__title">Assine o Sexlog VIP</h1>
    <button className="header__button"> ✕ </button>
    <div className="header__breadcrumb">
      <p className="header__description header__description--active">Escolhe o plano ideal para você</p>
      <p className="header__description">Escolha a forma de pagamento</p>
    </div>
  </header>
)

export default Header
