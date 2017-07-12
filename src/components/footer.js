import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({
    handleSteps,
    handleDone,
    isDisabled,
    nextStep,
    pageActive,
    validateCard,
    validateDate,
    validateName,
    validateCode
  }) => (
  <footer className="footer">
    {pageActive === 'home' &&
      <button className="footer__button" disabled={isDisabled} onClick={handleSteps}>
        {nextStep}
      </button>}
    {pageActive === 'checkout' &&
      <button
        className="footer__button"
        disabled={validateCard && validateDate && validateName && validateCode ? false : isDisabled}
        onClick={handleDone}>
        {nextStep}
      </button>}
    {pageActive === 'done' &&
      <button className="footer__button sexlog">
        {nextStep}
      </button>}
  </footer>
)

Footer.propTypes = {
    handleSteps: PropTypes.func.isRequired,
    handleDone: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    nextStep: PropTypes.string.isRequired,
    pageActive: PropTypes.string.isRequired,
    validateCard: PropTypes.bool.isRequired,
    validateDate: PropTypes.bool.isRequired,
    validateName: PropTypes.bool.isRequired,
    validateCode: PropTypes.bool.isRequired
}


export default Footer
