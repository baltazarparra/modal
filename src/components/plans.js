import React from 'react'
import PropTypes from 'prop-types'

const Plans = ({ planButton, handleClick, actualPlan, isFetching}) => (
  <section className="plans">
    {planButton.map((plan, index) => (
      <button id={plan.id} className={`plans__button ${plan.id === actualPlan ? 'active' : ''}`} key={index} onClick={handleClick} disabled={isFetching}>
        {plan.planName} <span className="plans__discount">{plan.discount}</span>
      </button>
    ))}
  </section>
)

Plans.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    planButton: PropTypes.array.isRequired
}

export default Plans
