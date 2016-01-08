local white = require('colours').white

return function()
  if DEBUG then
    local width, height = love.window.getDesktopDimensions()
    love.window.setMode(width - 256, height - 256)
  end

  love.graphics.setBackgroundColor(white())
end

