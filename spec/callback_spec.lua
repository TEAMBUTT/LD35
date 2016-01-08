require 'env'

local callbacks = require 'callbacks'

describe("LOVE callbacks", function()
  it("loads some callbacks of some kind", function()
    local table = {}
    callbacks(table)
    assert.equal(type(table.load), "function")
    assert.equal(type(table.update), "function")
    assert.equal(type(table.draw), "function")
    assert.equal(type(table.mousepressed), "function")
    assert.equal(type(table.mousereleased), "function")
    assert.equal(type(table.keypressed), "function")
    assert.equal(type(table.keyreleased), "function")
    assert.equal(type(table.focus), "function")
    assert.equal(type(table.quit), "function")
  end)
end)
