import React from 'react'
import PropTypes from 'prop-types'

const Price = ({ descriptionTotal, price, payments }) => (
  <article className="price">
    <div className="price__tag">
      <div className="price__coin">{price.currency}</div>
      <div className="price__value">{price.integer}</div>
      <div className="price__spans">
        <span className="price__decimal">{price.decimal}</span>
        <span className="price__periodicy">{price.periodicy}</span>
      </div>
    </div>
    <p className="price__description">
      {descriptionTotal}
    </p>
    <ul className="price__list">
      <li className="price__list-item price__list-item--cartao">{payments[0]}</li>
      <li className="price__list-item price__list-item--debito">{payments[1]}</li>
      <li className="price__list-item price__list-item--boleto">{payments[2]}</li>
    </ul>
  </article>
)

Price.propTypes = {
    descriptionTotal: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired
}

export default Price
