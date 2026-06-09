/**
 * @file E2E Tests - utils
 * @module fsm-compiler/utils/tests/e2e/api
 */

import * as testSubject from '@flex-development/fsm-compiler/utils'

describe('e2e:fsm-compiler/utils', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
