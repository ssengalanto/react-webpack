import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('should render without crashing', () => {
  const wrapper = shallow(<App />)
  const component = wrapper.find('[data-test="app-component"]')
  expect(component).toHaveLength(1)
})
