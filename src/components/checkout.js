import React from 'react'

const Checkout = ({handleCard, handleDate, handleName, handleCode, validateCard, actualPlan}) => (
  <form id="checkout" className="checkout">
      <label className="checkout__label">
        Número do Cartão
        <input
          className="checkout__input checkout__input--card"
          placeholder="Número do cartão"
          type="number"
          minLength="13"
          maxLength="16"
          required
          onBlur={handleCard}
        />
        <div className="error">Campo inválido</div>
      </label>
      <label className="checkout__label">
        <legend className="checkout__legend">Validade</legend>
        <select className="checkout__select" name="Mês" required>
          <option value="">Mês</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select className="checkout__select" name="Ano" onBlur={handleDate} required>
          <option value="">Ano</option>
          <option value="2016">16</option>
          <option value="2017">17</option>
          <option value="2018">18</option>
          <option value="2019">19</option>
          <option value="2020">20</option>
          <option value="2021">21</option>
        </select>
        <div className="error">Campo inválido</div>
      </label>
      <label className="checkout__label">
        Nome do Titular
        <input className="checkout__input checkout__input--name" placeholder="Nome do titular" type="text" onBlur={handleName} required />
        <div className="error">Campo inválido</div>
      </label>
      <label className="checkout__label checkout__input--cvc">
        Código de Segurança
        <input className="checkout__input" placeholder="CVC" type="number" onChange={handleCode} required />
        <div className="error">Campo inválido</div>
      </label>
      <span className="checkout__verbose">
          Para sua privacidade, a cobrança será feita em nome de "assinet-pgto-sl".
      </span>
    </form>
)

export default Checkout
