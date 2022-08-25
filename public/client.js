// client-side js

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#input')
  const submit = document.querySelector('#submit')
  const hostname = window.location.hostname
  const protocol = window.location.protocol
  const port = window.location.port ? `:${window.location.port}` : ''

  submit.addEventListener('click', event => {
    event.preventDefault()
    const value = String(input.value).replace('/', '-')
    // Set the browser location, using the encoded input value as the
    // first URL parameter.
    window.location.href = encodeURI(`${protocol}//${hostname}${port}/${value}`)
  })
})
