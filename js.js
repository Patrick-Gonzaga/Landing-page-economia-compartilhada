function exibir() {
  var i = 0
  for (i = 0; i < 100; i++) {
    if (i % 3 == 0) {
      console.log('Token')
    } else if (i % 5 == 0) {
      console.log('Lab')
    } else if (i % 5 == 0 && i % 3 == 0) {
      console.log('TokenLab')
    } else {
      console.log(i)
    }
  }
}

exibir()
