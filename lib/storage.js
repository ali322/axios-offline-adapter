const localforage = require('localforage')

module.exports = ({name = 'axios-stack', driver = localforage.LOCALSTORAGE}) => {
  let instance = localforage.createInstance({
    name: name
  })

  instance.setDriver(driver)

  return instance
}
