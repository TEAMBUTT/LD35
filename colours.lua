local inject = require('underscore').inject

local colours = {
  {
    name = 'white',
    rgb = { 255, 255, 255 }
  },
  {
    name = 'black',
    rgb = { 0, 0, 0 }
  }
}

return inject(colours, {}, function(memo, colour)
  memo[colour.name] = function()
    return unpack(colour.rgb)
  end
  return memo
end)
