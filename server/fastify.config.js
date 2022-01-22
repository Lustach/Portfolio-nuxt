// Подключаем модули для автоматической загрузки плагинов и маршрутов.
const path = require('path')
const AutoLoad = require('fastify-autoload')
// Автоматические подключение плагинов из папки plugins.
// eslint-disable-next-line require-await
module.exports = async function (fastify, opts) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // Автоматические подключение маршрутов из папки routes.
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
