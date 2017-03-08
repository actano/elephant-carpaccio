import { expect } from 'chai'

import { calculatePrice } from '../src/index'

describe('calculatePrice', () => {
  it('should return 0', () => {
    expect(calculatePrice()).to.equal(0)
  })
})
