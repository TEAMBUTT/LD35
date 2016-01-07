local callbacks = require 'callbacks'

describe("LOVE callbacks", function()
  it("loads something", function()
    local table = {}
    callbacks(table)
    assert.equal(type(table.load), "function")
  end)
end)
