return function(target)
  target.load = function()
    love.graphics.setBackgroundColor(255, 255, 255)
  end

  target.update = function(dt)
  end

  target.draw = function()
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
