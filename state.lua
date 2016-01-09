local state
local lastState
local renderList = {}

local update = function(dt)
  local initial = state ~= lastState
  lastState = state
  renderList = state(dt, initial)
end

local getRenderList = function()
  return renderList
end

local setState = function(newState)
  state = newState
end

return {
  update = update,
  getRenderList = getRenderList,
  setState = setState,
}
