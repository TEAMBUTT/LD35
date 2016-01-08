local white = require('colours').white
local black = require('colours').black

return function(target)
  target.load = function()
    love.graphics.setBackgroundColor(white())
  end

  target.update = function(dt)
  end

  target.draw = function()
    love.graphics.scale(2)
    love.graphics.setColor(black())
    love.graphics.print("This is working", 0, 0)
  end

  target.mousepressed = function(x, y, button)
  end

  target.mousereleased = function(x, y, button)
  end

  target.keypressed = function(key)
  end

  target.keyreleased = function(key)
  end

  target.focus = function(focused)
  end

  target.quit = function()
  end
end
