local colours = require 'colours'

return function(dt, initial)
  return { function()
    if initial then
      love.graphics.setBackgroundColor(colours.white())
    end

    love.graphics.setColor(colours.black())
    love.graphics.print("Press any key")
  end }
end
