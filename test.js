function compressedString(message) {
  let result = ""
  for (let i = 0; i < message.length; i++) {
      result.concat(message[i])
  }
      console.log(result)

  return result
}

console.log(compressedString('spoon'))