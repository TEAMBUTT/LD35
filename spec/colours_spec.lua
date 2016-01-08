require 'env'

local colours = require 'colours'

describe('colours', function()
  it('has colours', function()
    local r, g, b

    r, g, b = colours.white()
    assert.equal(r, 255)
    assert.equal(g, 255)
    assert.equal(b, 255)

    r, g, b = colours.black()
    assert.equal(r, 0)
    assert.equal(g, 0)
    assert.equal(b, 0)
  end)
end)
