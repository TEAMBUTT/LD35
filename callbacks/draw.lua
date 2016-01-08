local black = require('colours').black

return function()
  love.graphics.scale(2)
  love.graphics.setColor(black())
  love.graphics.print("This is working", 0, 0)
end
