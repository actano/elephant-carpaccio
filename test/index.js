import { expect } from 'chai'

import { getValue } from '../src/index'

describe('getValue function', () => {
  it('should return 42', () => {
    expect(getValue()).to.equal(42)
  })
})
