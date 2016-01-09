local queue = {}

local clear = function()
  queue = {}
end

local enqueue = function(event)
  table.insert(queue, event)
end

local dequeue = function()
  return table.remove(queue, 1)
end

return {
  enqueue = enqueue,
  dequeue = dequeue,
  clear = clear,
}
