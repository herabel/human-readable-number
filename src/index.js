module.exports = toReadable = number => {
    const numbers = {
      0: {
        singleDigit: 'zero',
      },
      1: {
        singleDigit: 'one',
        from11to19: 'eleven',
        roundTen: 'ten',
      },
      2: {
        singleDigit: 'two',
        from11to19: 'twelve',
        roundTen: 'twenty',
      },
      3: {
        singleDigit: 'three',
        from11to19: 'thirteen',
        roundTen: 'thirty',
      },
      4: {
        singleDigit: 'four',
        from11to19: 'fourteen',
        roundTen: 'forty',
      },
      5: {
        singleDigit: 'five',
        from11to19: 'fifteen',
        roundTen: 'fifty',
      },
      6: {
        singleDigit: 'six',
        from11to19: 'sixteen',
        roundTen: 'sixty',
      },
      7: {
        singleDigit: 'seven',
        from11to19: 'seventeen',
        roundTen: 'seventy',
      },
      8: {
        singleDigit: 'eight',
        from11to19: 'eighteen',
        roundTen: 'eighty',
      },
      9: {
        singleDigit: 'nine',
        from11to19: 'nineteen',
        roundTen: 'ninety',
      },
    }
  
    if (String(number).length === 3) {
      return returnThreeDigitNumber(number)
    } else if (String(number).length === 2) {
      return returnTwoDigitNumber(number)
    } else {
      return `${returnOnes(number)}`
    }
  
    function returnThreeDigitNumber(number) {
      const [numberOfHundreds, numberOfTens, numberOfOnes] = String(number)
      if (number % 100 === 0) {
        return returnHundreds(numberOfHundreds)
      }
      if (number % 10 === 0) {
        return `${returnHundreds(numberOfHundreds)} ${returnTens(numberOfTens)}`
      }
      if (numberOfTens === '1') {
        return `${returnHundreds(numberOfHundreds)} ${returnNumberFrom11To19(
          numberOfOnes
        )}`
      }
      if (numberOfTens !== '0') {
        return `${returnHundreds(numberOfHundreds)} ${returnTens(
          numberOfTens
        )} ${returnOnes(numberOfOnes)}`
      }
  
      return `${returnHundreds(numberOfHundreds)} ${returnOnes(numberOfOnes)}`
    }
  
    function returnTwoDigitNumber(number) {
      const [numberOfTens, numberOfOnes] = String(number)
      if (number % 10 === 0) {
        return `${returnTens(numberOfTens)}`
      } else if (number > 10 && number < 20) {
        return `${returnNumberFrom11To19(numberOfOnes)}`
      } else {
        return `${returnTens(numberOfTens)} ${returnOnes(numberOfOnes)}`
      }
    }
  
    function returnHundreds(numberOfHundreds) {
      return `${numbers[numberOfHundreds].singleDigit} hundred`
    }
    function returnTens(numberOfTens) {
      return `${numbers[numberOfTens].roundTen}`
    }
  
    function returnOnes(numberOfOnes) {
      return `${numbers[numberOfOnes].singleDigit}`
    }
    function returnNumberFrom11To19(number) {
      return `${numbers[number].from11to19}`
    }
  }
