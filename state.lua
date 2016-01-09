local state = function(dt)
  return {}
end
local initial = false
local renderList = {}

local update = function(dt)
  renderList = state(dt, initial)
  initial = false
end

local getRenderList = function()
  return renderList
end

local setState = function(newState)
  state = newState
  initial = true
end

return {
  update = update,
  getRenderList = getRenderList,
  setState = setState,
}
