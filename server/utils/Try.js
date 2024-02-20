/**
 * Try - Wrap a function that returns a promise, returning an array,
 * for simpler and more readable code.
 *
 *   const [err, r] = await Try(myPromiseFunction())
 *   if (err) return err
 *
 * @param {Function}  promise - A function that returns a promise
 * @returns {Array<{err: *, result: *}>}
 */
export default (promise) => {
  return promise
    .then((result) => {
      return [false, result]
    })
    .catch((err) => {
      // Log the errors here if you wish
      // console.log(err)
      return [err, false]
    })
}
