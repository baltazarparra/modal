import React from 'react'
import Header from './header'
import Price from './price'
import Plans from './plans'
import Checkout from './checkout'
import Done from './done'
import Footer from './footer'
import PropTypes from 'prop-types'

const Modal = ({
  actualPlan,
  descriptionTotal,
  handleClick,
  handleSteps,
  handleBack,
  handleCard,
  handleDate,
  handleName,
  handleCode,
  handleDone,
  isDisabled,
  isFetching,
  nextStep,
  price,
  payments,
  planButton,
  pageActive,
  validateCard,
  validateDate,
  validateName,
  validateCode
}) => (
  <section className="modal">
    <Header pageActive={pageActive} handleBack={handleBack}/>
      <main className="main">
        {pageActive === 'home' && <Price
          descriptionTotal={descriptionTotal}
          price={price}
          payments={payments}
        />}
        {pageActive === 'home' && <Plans
          planButton={planButton}
          handleClick={handleClick}
          actualPlan={actualPlan}
          isFetching={isFetching}
        />}
        {pageActive === 'checkout' &&
          <Checkout
            handleCard={handleCard}
            handleDate={handleDate}
            handleName={handleName}
            handleCode={handleCode}
            validateCard={validateCard}
            actualPlan={actualPlan}
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
      validateDate={validateDate}
      validateName={validateName}
      validateCode={validateCode}
    />
  </section>
)

Modal.propTypes = {
    descriptionTotal: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleSteps: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired,
    handleCard: PropTypes.func.isRequired,
    handleDate: PropTypes.func.isRequired,
    handleName: PropTypes.func.isRequired,
    handleCode: PropTypes.func.isRequired,
    handleDone: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    nextStep: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
    payments: PropTypes.array.isRequired,
    planButton: PropTypes.array.isRequired,
    pageActive: PropTypes.string.isRequired,
    validateCard: PropTypes.bool.isRequired,
    validateDate: PropTypes.bool.isRequired,
    validateName: PropTypes.bool.isRequired,
    validateCode: PropTypes.bool.isRequired,
}

export default Modal
