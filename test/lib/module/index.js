/**
 * A test class to extend
 */
class Test {
  /**
   * A method that returns nothing
   */
  noReturn () {
    console.log('noreturn')
  }
}

/**
 * A module class
 */
class Module extends Test {
  /**
   * Construct a Module
   * @class
   * @param {String} firstparam                  The first param
   * @param {Object} objectparam                 An object param
   * @prop  {String} objectparam.first           The first prop
   * @prop  {String} [objectparam.second]        The second prop
   * @prop  {String} [objectparam.third='third'] The third prop
   */
  constructor (firstparam, objectparam) {
    super()

    const {
      first,
      second,
      third
    } = objectparam

    /**
     * The first
     */
    this.first = first

    /**
     * The second
     * @type {String}
     */
    this.second = second

    /**
     * A private member
     * @private
     * @type    {String}
     */
    this._private = 'secret'

    /**
     * An object member
     * @prop {String} first  The first
     * @prop {String} second The second
     * @prop {String} third  The third
     */
    this.obj = {
      first,
      second,
      third
    }
  }

  /**
   * An async method
   * @async
   * @returns {Promise<Number>} A number
   */
  async asycMethod () {
    return 5
  }

  /**
   * A promise method
   * @param   {interfDef} interf The defined interface
   * @returns {Promise}
   */
  returnPromise (interf) {
    return new Promise()
  }

  /**
   * Get a getter
   * @type    {String}
   * @example          Hey there, this is an example
   */
  get getter () {
    return 'got'
  }
}

/**
 * A typedef
 * @typedef {Object} objType
 * @prop    {Number} num     A number property
 * @prop    {String} str
 */

/**
  * @callback          callbackDef
  * @param    {Object} param      A param
  * @prop     {String} param.prop A prop
  */

/**
 * A mainline function
 * @param   {*} param The param
 * @returns {*}       The supplied param
 */
function mainlineFunction (param) {
  return param
}

module.exports = {
  Test,
  mainlineFunction,
  Module
}
