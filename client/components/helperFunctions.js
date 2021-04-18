import * as d3 from 'd3';

export function dateTransform (date) {
 return new Date(date).toString().substring(4, 15)
}

export function numberFormat (time) {
  const numberFormating = d3.format(",d")	
  return numberFormating(time)
}