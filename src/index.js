module.exports = function check(str, bracketsConfig) {
  
  const OPEN_BRACKETS = ['(', '[', '{']
  const BRACKETS_PAIR = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
  }

  function isBracketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let topElem = stack[stack.length - 1]
      let currentSymbol = str[i];

      if (str[i] === '|') {
        if (stack.includes(str[i])) {
          if (topElem === str[i]) {
            stack.pop()
          } else {
            return false
          }
        } else {
          stack.push(str[i])
        }
      }

      if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol)
      } else {
        if (!stack.length) {
          return false
        }
        if (BRACKETS_PAIR[currentSymbol] === topElem) {
          stack.pop()
        } else {
          return false
        }
      }
    }
    return stack.length === 0
  }
  return isBracketsOk(str)
}
