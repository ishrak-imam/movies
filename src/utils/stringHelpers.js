
export const getHash = s => {
  for (var i = 0, h = 0; i < s.length; i++) { h = Math.imul(31, h) + s.charCodeAt(i) | 0 }
  return String(h)
}

export const getExtension = fileUri => {
  const re = /(?:\.([^.]+))?$/
  return re.exec(fileUri)[0]
}

export const checkEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const checkBookingCode = code => {
  const re = /^[0-9]{6}$/
  return re.test(String(code))
}

export const checkSSN = ssn => {
  const re = /^(19|20)?(\d{6}(-|\s)\d{4}|(?!19|20)\d{10})$/
  return re.test(String(ssn))
}

export const stringShorten = (str, limit) => {
  if (str.length < limit) return str
  return `${str.substring(0, limit)}...`
}
