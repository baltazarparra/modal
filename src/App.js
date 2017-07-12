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
      payments: [],
      planButton: [],
      isDisabled: true,
      nextStep: 'Próximo passo: pagamento',
      pageActive: 'home',
      actualPlan: '',
      validateCard: false,
      validateDate: false,
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
          payments: initialPlan.payments,
          actualPlan: initialPlan.id,
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
          price: {
            currency: selected.price.currency,
            integer: selected.price.integer,
            decimal: selected.price.decimal,
            periodicy: selected.price.periodicy
          },
          payments: selected.payments,
          actualPlan: selected.id,
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

  handleCard (e) {
    const card = new CreditCard()
    if(card.isValid(e.target.value)) {
      e.target.classList.remove('invalid')
      this.setState({
        validateCard: true
      })
    } else {
      e.target.classList.add('invalid')
      this.setState({
        validateCard: false
      })
    }
  }

  handleDate (e) {
    const today = new Date()
    const year =  today.getFullYear()
    const month = today.getMonth() + 1
    const validMonth = document.querySelector('[name="Mês"]')
    if(e.target.value > year) {
      e.target.classList.remove('invalid')
      validMonth.classList.remove('invalid')
      this.setState({
        validateDate: true
      })
    } else if ((parseInt(validMonth.value, 10) >= month) && (parseInt(e.target.value, 10) === year)) {
      e.target.classList.remove('invalid')
      validMonth.classList.remove('invalid')
      this.setState({
        validateDate: true
      })
    } else {
      e.target.classList.add('invalid')
      validMonth.classList.add('invalid')
      this.setState({
        validateName: false
      })
    }
  }

  handleName (e) {
    if(e.target.value.length > 1) {
      e.target.classList.remove('invalid')
      this.setState({
        validateName: true
      })
    } else {
      e.target.classList.add('invalid')
      this.setState({
        validateName: false
      })
    }
  }

  handleCode (e) {
    if(e.target.value.length >= 3 && e.target.value.length <= 4) {
      e.target.classList.remove('invalid')
      this.setState({
        validateCode: true
      })
    } else {
      e.target.classList.add('invalid')
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
          handleDate={(e) => this.handleDate(e)}
          handleName={(e) => this.handleName(e)}
          handleCode={(e) => this.handleCode(e)}
          handleDone={(e) => this.handleDone(e)}
        />
      </div>
    );
  }
}

export default App
