local state = function(dt)
  return { function()
    love.graphics.setColor(require('colours').black())
    love.graphics.print("You might want to change the state to a real one.")
  end }
end

local renderList = {}

local update = function(dt)
  renderList = state()
end

local getRenderList = function()
  return renderList
end

return {
  update = update,
  getRenderList = getRenderList
}
