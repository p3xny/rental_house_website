import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCalendarStore = defineStore('calendar', () => {
  const isCalendarVisible = ref(false)

  const toggleCalendar = () => {
    isCalendarVisible.value = !isCalendarVisible.value
  }

  watch(isCalendarVisible, (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })

  return { isCalendarVisible, toggleCalendar }
})
