import { ref } from 'vue'
// import { formVisible } from './../components/Reservation.vue'

export const dateRange = ref({
  start: new Date(),
  end: new Date(),
})

const peopleCount = ref(2)
export const formVisible = ref(false)

export const closeForm = () => {
  formVisible.value = false
}

const isDropdown = ref(false)
export const changeNumberOfGuests = (id) => {
  const element = document.getElementById(`${id}`)
  isDropdown.value = false
  peopleCount.value = element.innerHTML
  console.log(`PEOPLE COUNT VALUE: ${peopleCount.value}`)
}

export const sendReservationRequest = async (emailID, phoneID, messageID) => {
  const email = document.getElementById(emailID).value.trim()
  const phone = document.getElementById(phoneID).value.trim()
  const message = document.getElementById(messageID).value.trim()

  if (!email) {
    alert('Prosimy o podanie adresu e-mail, na który możemy się odezwać :)')
    return
  }

  const payload = {
    email,
    phone,
    message,
    startDate: dateRange.value.start.toISOString().split('T')[0],
    endDate: dateRange.value.end.toISOString().split('T')[0],
    people: peopleCount.value,
  }

  try {
    const response = await fetch('http://localhost:8000/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      const result = await response.json()
      alert('Wiadomość została wysłana pomyślnie: ' + result.message)
      closeForm()
    } else {
      const error = await response.json()
      alert('Błąd podczas wysyłania wiadomości: ' + (error.detail || 'Nieznany błąd.'))
    }
  } catch (err) {
    console.error('Błąd sieci:', err)
    alert('Nie udało się wysłać wiadomości z powodu błędu sieci.')
  }
}
