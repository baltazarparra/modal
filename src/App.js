import React, { Component } from 'react'
import './App.css'
import CreditCard from 'creditcard.js'
import Modal from './components/modal'

class App extends Component {
  constructor () {
    super()
    this.state = {
      descriptionTotal: '',
      price: {},
      planButton: [],
      isDisabled: true,
      nextStep: 'Próximo passo: pagamento',
      isCurrent: 'active',
      pageActive: 'home',
      validateCard: false,
      validateMonth: false,
      validateYear: false,
      validateName: false,
      validateCode: false
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(response => {
        const initialPlans = response
        const initialPlan = initialPlans.plans[0]

        this.setState({
          descriptionTotal: initialPlan.total,
          price: {
            currency: initialPlan.price.currency,
            integer: initialPlan.price.integer,
            decimal: initialPlan.price.decimal,
            periodicy: initialPlan.price.periodicy
          },
          planButton:
            initialPlans.plans.map((item) => {
                return {
                  id: item.id,
                  planName: item.name,
                  discount: item.discount
                }
              })
        })
      })
  }

  handleClick (e) {
    const targetId = e.target.id
    const data = fetch('./data.json')
    data
      .then(data => data.json())
      .then(data => {
        const selected = data.plans.find((item) => item.id.toString() === targetId)
        this.setState({
          isDisabled: false,
          isCurrent: '',
          price: {
            currency: selected.price.currency,
            integer: selected.price.integer,
            decimal: selected.price.decimal,
            periodicy: selected.price.periodicy
          },
          descriptionTotal: selected.total
        })
      }
    )
  }

  handleSteps (e) {
    this.setState({
      isDisabled: true,
      nextStep: 'Concluir minha assinatura',
      pageActive: 'checkout'
    })
  }

  handleBack (e) {
    this.setState({
      isDisabled: true,
      nextStep: 'Próximo passo: pagamento',
      pageActive: 'home'
    })
  }

  handleCard (e) {
    const card = new CreditCard()
    if(card.isValid(e.target.value)) {
      e.target.classList.remove('red')
      this.setState({
        validateCard: true
      })
    } else {
      e.target.classList.add('red')
      this.setState({
        validateCard: false
      })
    }
  }

  handleMonth (e) {
    const today = new Date()
    const month = today.getMonth()
    if(e.target.value >= month) {
      this.setState({
        validateMonth: true
      })
    } else {
      this.setState({
        validateMonth: false
      })
    }
  }

  handleYear (e) {
    if(e.target.value) {
      this.setState({
        validateYear: true
      })
    } else {
      this.setState({
        validateYear: false
      })
    }
  }

  handleName (e) {
    if(e.target.value.length > 1) {
      this.setState({
        validateName: true
      })
    } else {
      this.setState({
        validateName: false
      })
    }
  }

  handleCode (e) {
    if(e.target.value.length >= 3 && e.target.value.length <= 4) {
      this.setState({
        validateCode: true
      })
    } else {
      this.setState({
        validateCode: false
      })
    }
  }

  handleDone (e) {
    this.setState({
      isDisabled: false,
      nextStep: 'Explorar o Sexlog',
      pageActive: 'done'
    })
  }

  render() {
    return (
      <div className="App">
        <Modal
          {...this.state}
          handleClick={(e) => this.handleClick(e)}
          handleSteps={(e) => this.handleSteps(e)}
          handleBack={(e) => this.handleBack(e)}
          handleCard={(e) => this.handleCard(e)}
          handleMonth={(e) => this.handleMonth(e)}
          handleYear={(e) => this.handleYear(e)}
          handleName={(e) => this.handleName(e)}
          handleCode={(e) => this.handleCode(e)}
          handleDone={(e) => this.handleDone(e)}
        />
      </div>
    );
  }
}

export default App
