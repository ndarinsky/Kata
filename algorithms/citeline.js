//add property if condicion is not false
const pinnedStyles = {
    ...leftSideCols && { left: leftSideCols.offset },
    ...rightSideCols && { right: rightSideCols.offset }
}