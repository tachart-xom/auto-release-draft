import * as core from '@actions/core'

/**
 * Wait for a number of milliseconds.
 * @param milliseconds The number of milliseconds to wait.
 * @returns {Promise<string>} Resolves with 'done!' after the wait is over.
 */
export async function wait(milliseconds: number): Promise<string> {
  return new Promise(resolve => {
    core.notice('hello world! from wait.ts')
    if (isNaN(milliseconds)) {
      throw new Error('milliseconds not a number in wait.ts')
    }

    setTimeout(() => resolve('done!'), milliseconds)
  })
}
