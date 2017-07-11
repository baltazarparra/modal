import React from 'react'
import PropTypes from 'prop-types'

const Price = ({ descriptionTotal, price }) => (
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
      <li className="price__list-item price__list-item--cartao">Até 3x iguais no cartão de crédito</li>
      <li className="price__list-item price__list-item--debito">Parcela única no débito em conta</li>
      <li className="price__list-item price__list-item--boleto">Parcela única no boleto bancário</li>
    </ul>
  </article>
)

Price.propTypes = {
    descriptionTotal: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired
}

export default Price
