local queue = {}

local push = function(event)
  table.insert(queue, event)
end

return {
  push = push
}
