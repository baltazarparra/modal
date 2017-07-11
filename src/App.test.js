import React from 'react';
import PropTypes from 'prop-types'
import App from './App';
import { shallow, mount, render } from 'enzyme'

import Checkout from './components/checkout'
import Done from './components/done'
import Footer from './components/footer'
import Header from './components/header'
import Modal from './components/modal'

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />)
    expect(component).toHaveLength(1)
  })
})

describe('<Checkout />', () => {
  it('renders 1 <Checkout /> component', () => {
    const component = shallow(<Modal />)
    expect(component).toHaveLength(1)
  })
})

describe('<Done />', () => {
  it('renders 1 <Done /> component', () => {
    const component = shallow(<Done />)
    expect(component).toHaveLength(1)
  })
})

describe('<Footer />', () => {
  it('renders 1 <Footer /> component', () => {
    const component = shallow(<Footer />)
    expect(component).toHaveLength(1)
  })
})

describe('<Header />', () => {
  it('renders 1 <Header /> component', () => {
    const component = shallow(<Header />)
    expect(component).toHaveLength(1)
  })
})

describe('<Modal />', () => {
  it('renders 1 <Modal /> component', () => {
    const component = shallow(<Modal />)
    expect(component).toHaveLength(1)
  })
})
