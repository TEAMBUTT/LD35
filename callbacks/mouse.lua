local mousePressed = function(x, y, button)
  print(x, y, button)
end

local mouseReleased = function(x, y, button)
  print(x, y, button)
end

return { mousePressed, mouseReleased }
