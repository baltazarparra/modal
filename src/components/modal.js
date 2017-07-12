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
  payments,
  planButton,
  isDisabled,
  isFetching,
  handleClick,
  pageActive,
  actualPlan,
  nextStep,
  handleSteps,
  handleBack,
  handleCard,
  handleDate,
  handleName,
  handleCode,
  handleDone,
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
    price: PropTypes.object.isRequired,
    planButton: PropTypes.array.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    pageActive: PropTypes.string.isRequired,
    nextStep: PropTypes.string.isRequired,
    handleSteps: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired
}

export default Modal
