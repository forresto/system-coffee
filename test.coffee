module.exports = class coffeeTest
  constructor: (@message) ->
  go: (count) ->
    out = ""
    for i in [0..count]
      out += "#{@message} #{i}! "
    return out