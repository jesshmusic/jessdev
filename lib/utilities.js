export const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, '')
}

// eslint-disable-next-line camelcase
export const excerpt = (str, no_words) => {
  return str.split(' ').splice(0, no_words).join(' ')
}

export const distributeByPosition = (vars) => {
  const ease = vars.ease
  const from = vars.from || 0
  const base = vars.base || 0
  const axis = vars.axis
  const ratio = { center: 0.5, end: 1 }[from] || 0
  let distances
  return function (i, target, a) {
    let l = a.length
    let originX
    let originY
    let x
    let y
    let d
    let j
    let minX
    let maxX
    let minY
    let maxY
    let positions
    if (!distances) {
      distances = []
      minX = minY = Infinity
      maxX = maxY = -minX
      positions = []
      for (j = 0; j < l; j++) {
        d = a[j].getBoundingClientRect()
        x = (d.left + d.right) / 2 // based on the center of each element
        y = (d.top + d.bottom) / 2
        if (x < minX) {
          minX = x
        }
        if (x > maxX) {
          maxX = x
        }
        if (y < minY) {
          minY = y
        }
        if (y > maxY) {
          maxY = y
        }
        positions[j] = { x: x, y: y }
      }
      originX = isNaN(from) ? minX + (maxX - minX) * ratio : positions[from].x || 0
      originY = isNaN(from) ? minY + (maxY - minY) * ratio : positions[from].y || 0
      maxX = 0
      minX = Infinity
      for (j = 0; j < l; j++) {
        x = positions[j].x - originX
        y = originY - positions[j].y
        distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === 'y') ? y : x)
        if (d > maxX) {
          maxX = d
        }
        if (d < minX) {
          minX = d
        }
      }
      distances.max = maxX - minX
      distances.min = minX
      distances.v = l = vars.amount || (vars.each * l) || 0
      distances.b = (l < 0) ? base - l : base
    }
    l = (distances[i] - distances.min) / distances.max
    return distances.b + (ease ? ease.getRatio(l) : l) * distances.v
  }
}
