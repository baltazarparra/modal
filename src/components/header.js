import React from 'react'
import PropTypes from 'prop-types'

const Header = ({pageActive, handleBack}) => (
  <header className="header">
    {pageActive === 'checkout' && <button className="header__button header__button--back" onClick={handleBack}> 〈 </button>}
    <h1 className="header__title">Assine o Sexlog VIP</h1>
    <button className="header__button"> ✕ </button>
    {pageActive === 'home' &&
    <div className="header__breadcrumb">
      <p className="header__description active">Escolhe o plano ideal para você</p>
      <p className="header__description">Escolha a forma de pagamento</p>
    </div>}
    {pageActive === 'checkout' &&
    <div className="header__breadcrumb">
      <p className="header__description">Escolhe o plano ideal para você</p>
      <p className="header__description active">Escolha a forma de pagamento</p>
    </div>}
  </header>
)

Header.propTypes = {
    handleBack: PropTypes.func.isRequired,
    pageActive: PropTypes.string.isRequired
}

export default Header
