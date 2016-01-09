local state
local lastState
local clearInput = require('input').clear
local renderList = {}

local update = function(dt)
  local initial = state ~= lastState
  lastState = state
  renderList = state(dt, initial)
  clearInput()
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
