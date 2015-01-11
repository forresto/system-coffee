class coffeeTest
  constructor: (@message) ->
  go: (count) ->
    for i in [0..@count]
      document.body.appendChild "#{@message} #{i}! "
