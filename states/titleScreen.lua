local colours = require 'colours'
local state = require 'state'
local nextState = require 'states.mainMenu'

local timeElapsed

return function(dt, initial)
  if initial then
    timeElapsed = 0
  end

  timeElapsed = timeElapsed + dt

  local message
  if timeElapsed < 1.5 then
    message = "a game by\nJared Norman"
  elseif timeElapsed < 3 then
    message = "HATER"
  else
    state.setState(nextState)
    return {}
  end

  return { function()
    if initial then
      love.graphics.setBackgroundColor(colours.black())
    end

    love.graphics.setColor(colours.white())
    love.graphics.print(message)
  end }
end
