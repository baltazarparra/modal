import React from 'react'
import PropTypes from 'prop-types'

const Plans = ({ planButton, handleClick, isCurrent }) => (
  <section className="choices">
    {planButton.map((plan, index) => (
      <button id={plan.id} className={`choices__button ${index === 0 ? isCurrent : ''}`} key={index} onClick={handleClick}>
        {plan.planName} <span>{plan.discount}</span>
      </button>
    ))}
  </section>
)

Plans.propTypes = {
    planButton: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Plans
