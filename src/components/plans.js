import React from 'react'
import PropTypes from 'prop-types'

const Plans = ({ planButton, handleClick, isCurrent, actualPlan}) => (
  <section className="plans">
    {planButton.map((plan, index) => (
      <button id={plan.id} className={`plans__button ${plan.id === actualPlan ? 'active' : ''}`} key={index} onClick={handleClick}>
        {plan.planName} <span className="plans__discount">{plan.discount}</span>
      </button>
    ))}
  </section>
)

Plans.propTypes = {
    planButton: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Plans
