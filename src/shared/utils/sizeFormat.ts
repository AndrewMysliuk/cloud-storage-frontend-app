const sizeFormat = (size: number): string => {
  const gb = 1024 * 1024 * 1024
  const mb = 1024 * 1024
  const kb = 1024

  if (size >= gb) {
    return (Math.round((size / gb) * 10) / 10).toFixed(1) + " Gb"
  }
  if (size >= mb) {
    return (Math.round((size / mb) * 10) / 10).toFixed(1) + " Mb"
  }
  if (size >= kb) {
    return (Math.round((size / kb) * 10) / 10).toFixed(1) + " Kb"
  }
  return size + " B"
}

export default sizeFormat
