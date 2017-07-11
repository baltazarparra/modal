import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({
    isDisabled,
    nextStep,
    handleSteps,
    pageActive,
    handleDone,
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
          onClick={handleDone}
        >
          {nextStep}
        </button>}

        {pageActive === 'done' &&
          <button className="footer__button sexlog">
            {nextStep}
          </button>}

  </footer>
)

Footer.propTypes = {
  isDisabled: PropTypes.bool.isRequired
}

export default Footer
