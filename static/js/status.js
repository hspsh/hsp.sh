window.fetch('https://status.hsp.sh/api/now')
  .then((response) => {
    if (response.status !== 200) {
      console.error('Whois connection failed. Status Code: ' +
        response.status)
      throw response
    }

    response.json().then((data) => {
      if (data.state.open === true) {
        const door = document.querySelector('#door')
        door.classList.add('open')
        door.setAttribute('title', `${data.users.join(', ')}`)
      }
    })
  }
  )
  .catch(function (err) {
    console.error('Fetch Error :-S', err)
  })
