import React from 'react'
import Header from './header'
import Price from './price'
import Plans from './plans'
import Checkout from './checkout'
import Done from './done'
import Footer from './footer'
import PropTypes from 'prop-types'

const Modal = ({
  descriptionTotal,
  price,
  planButton,
  isDisabled,
  handleClick,
  isCurrent,
  pageActive,
  nextStep,
  handleSteps,
  handleBack,
  handleFlag,
  handleCard,
  handleMonth,
  handleYear,
  handleName,
  handleCode,
  handleDone,
  validateCard,
  validateMonth,
  validateYear,
  validateName,
  validateCode
}) => (
  <section className="modal">
    <Header pageActive={pageActive} handleBack={handleBack} />
      <main>
        {pageActive === 'home' && <Price
          descriptionTotal={descriptionTotal}
          price={price}
        />}
        {pageActive === 'home' && <Plans
          planButton={planButton}
          handleClick={handleClick}
          isCurrent={isCurrent}
        />}
        {pageActive === 'checkout' &&
          <Checkout
            handleFlag={handleFlag}
            handleCard={handleCard}
            handleMonth={handleMonth}
            handleYear={handleYear}
            handleName={handleName}
            handleCode={handleCode}
          />}
        {pageActive === 'done' && <Done handleDone={handleDone}/>}
      </main>
    <Footer
      isDisabled={isDisabled}
      nextStep={nextStep}
      handleSteps={handleSteps}
      handleDone={handleDone}
      pageActive={pageActive}
      validateCard={validateCard}
      validateMonth={validateMonth}
      validateYear={validateYear}
      validateName={validateName}
      validateCode={validateCode}
    />
  </section>
)

Modal.propTypes = {
    descriptionTotal: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
    planButton: PropTypes.array.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    isCurrent: PropTypes.string.isRequired,
    pageActive: PropTypes.string.isRequired,
    nextStep: PropTypes.string.isRequired,
    handleSteps: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired
}

export default Modal
