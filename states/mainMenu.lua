local colours = require 'colours'
local dequeue = require('input').dequeue
local setState = require('state').setState

return function(dt, initial)
  for event in dequeue do
    if event.type == "KEY_RELEASE" then
      setState(require 'states.game')
    end
  end

  return { function()
    if initial then
      love.graphics.setBackgroundColor(colours.white())
    end

    love.graphics.setColor(colours.black())
    love.graphics.print("Press any key")
  end }
end
