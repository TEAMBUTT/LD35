local state = require 'state'
local titleScreen = require 'states.titleScreen'

return function()
  if DEBUG then
    local width, height = love.window.getDesktopDimensions()
    love.window.setMode(width - 256, height - 256)
  end

  love.graphics.setDefaultFilter('nearest', 'nearest')

  state.setState(titleScreen)
end

