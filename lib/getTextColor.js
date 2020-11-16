import hexRgb from 'hex-rgb'
import toHex from 'colornames'

const getTextColor = hex => {
  hex = toHex(hex)
  if (hex) {
    let rgb = hexRgb(hex, { format: 'array' })
    let a = 1 - (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
    let textColor = a < 0.5 ? 'black' : 'white'
    return textColor
  } else return 'white'
}

export default getTextColor
