local enqueue = require('input').enqueue

local mousePressed = function(x, y, button)
  enqueue{
    type = 'MOUSE_PRESS',
    payload = {
      x = x,
      y = y,
      button = button,
    },
  }
end

local mouseReleased = function(x, y, button)
  enqueue{
    type = 'MOUSE_RELEASE',
    payload = {
      x = x,
      y = y,
      button = button,
    },
  }
end

local keyPressed = function(key)
  enqueue{
    type = 'KEY_PRESS',
    payload = { key = key },
  }
end

local keyReleased = function(key)
  enqueue{
    type = 'KEY_RELEASE',
    payload = { key = key },
  }

  if key == "escape" and DEBUG then
    love.event.quit()
  end
end

return {
  mousePressed,
  mouseReleased,
  keyPressed,
  keyReleased,
}
