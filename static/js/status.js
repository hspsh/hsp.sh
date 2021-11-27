window.fetch('https://status.hsp.sh/api/now')
  .then((response) => {
    if (response.status !== 200) {
      console.error('Whois connection failed. Status Code: ' +
        response.status)
      throw response
    }

    response.json().then((data) => {
      if (data.state.open === true) {
        const doors = document.querySelectorAll('.door')
        doors.forEach((elt, index) => {
          elt.classList.add('open')
          // elt.setAttribute('title', `${data.users.join(', ')}`)
        });
      }
    })
  }
  )
  .catch(function (err) {
    console.error('Fetch Error :(', err)
  })
