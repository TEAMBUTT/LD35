return function(target)
  target.load = require 'callbacks.load'
  target.draw = require 'callbacks.draw'
  target.update = require 'callbacks.update'
  target.focus = require 'callbacks.focus'
  target.quit = require 'callbacks.quit'

  target.mousepressed,
  target.mousereleased = unpack(require 'callbacks.mouse')

  target.keypressed,
  target.keyreleased = unpack(require 'callbacks.keyboard')
end
