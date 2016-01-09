local keyPressed = function(key)
  print("Key pressed", key)
end

local keyReleased = function(key)
  print("Key released", key)
  if key == "escape" and DEBUG then
    love.event.quit()
  end
end

return { keyPressed, keyReleased }
