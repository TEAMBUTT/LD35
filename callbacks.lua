return function(target)
  target.load = function()
    love.graphics.setBackgroundColor(255, 255, 255)
  end
end
