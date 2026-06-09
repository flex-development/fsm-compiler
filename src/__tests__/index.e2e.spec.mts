/**
 * @file E2E Tests - api
 * @module fsm-compiler/tests/e2e/api
 */

import * as testSubject from '@flex-development/fsm-compiler'

describe('e2e:fsm-compiler', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
