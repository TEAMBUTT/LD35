local state = require 'state'

return function()
  love.graphics.scale(2)
  for index, renderable in ipairs(state.getRenderList()) do
    if type(renderable) == 'function' then
      renderable()
    end
  end
end
