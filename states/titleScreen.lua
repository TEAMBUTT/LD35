local colours = require 'colours'
local setState = require('state').setState

local timeElapsed

local getMessage = function()
  if timeElapsed < 1.5 then
    return "a game by\nJared Norman"
  else
    return "HATER"
  end
end

return function(dt, initial)
  if DEBUG then
    setState(require 'states.game')
  end

  if initial then
    timeElapsed = 0
  end

  timeElapsed = timeElapsed + dt

  if timeElapsed >= 3 then
    setState(require 'states.mainMenu')
  end

  return { function()
    if initial then
      love.graphics.setBackgroundColor(colours.black())
    end

    love.graphics.setColor(colours.white())
    love.graphics.print(getMessage())
  end }
end
