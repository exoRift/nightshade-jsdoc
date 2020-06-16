/**
 * The main class
 */
class Main {
  constructor () {
    this.test = 'hello'
  }

  /**
   * Returns an int
   * @returns {Number} The number
   */
  returnInt () {
    return 5
  }

  /**
   * Return a string
   * @private
   * @return  {String} The string
   */
  _returnStringPrivate () {
    return ''
  }

  /**
   * Return a string but with args
   * @param   {String} test What to return
   * @returns {String}      The param
   */
  returnStringWithArgs (test) {
    return test
  }
}

module.exports = Main
