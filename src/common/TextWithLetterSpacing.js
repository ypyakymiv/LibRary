import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Letter } from './Letter'

//allow titles to space out like in ios
const spacingForLetterIndex = (letters, index, spacing) => (letters.length - 1 === index) ? 0 : spacing

const TextWithLetterSpacing = (props) => {
  const { children, spacing, viewStyle, textStyle } = props
  debugger;
  const letters = children.split('')

  return <View style={[styles.container, viewStyle]}>
    {letters.map((letter, index) =>
      <Letter key={index} spacing={spacingForLetterIndex(letters, index, spacing)} textStyle={textStyle}>
        {letter}
      </Letter>
    )}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

export default TextWithLetterSpacing;