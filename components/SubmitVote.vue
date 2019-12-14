<template>
  <form @submit.prevent="submitVote" class="flex flex-col">
    <label
      for="telegram-user-name-input"
      class="block mb-1 leading-tight text-gray-700 font-semibold"
    >
      Дайте знать что вы тоже собиретесь
    </label>
    <p
      :id="`telegram-user-name-hint-session-${sessionId}`"
      class="max-w-lg mb-5 text-sm text-gray-600"
    >
      Введите ваше имя пользователя Telegram, и мы добавим вас в групповой чат к
      другим людям которые тоже планируют идти на это заседание
    </p>
    <div class="flex flex-col sm:flex-row">
      <input
        :id="`telegram-user-name-input-session-${sessionId}`"
        v-model="telegramUserName"
        :required="true"
        :aria-invalid="false"
        :aria-required="true"
        :name="`telegram-user-name-input-session-${sessionId}`"
        :aria-describedby="`telegram-user-name-hint-session-${sessionId}`"
        type="text"
        placeholder="@username"
        class="c-input px-3 mb-4 sm:m-0 sm:rounded-r-none"
      />
      <button
        type="submit"
        class="c-btn c-btn--action whitespace-no-wrap sm:w-64 sm:rounded-l-none"
      >
        Я приду
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'SubmitVote',
  props: {
    sessionId: {
      type: Number,
      required: true
    }
  },
  setup(props, { root }) {
    /** Refs */
    const telegramUserName = ref('')

    /** Functions */
    const submitVote = function() {
      console.log(
        `${telegramUserName.value} пойдет на заседание ${props.sessionId}`
      )
    }

    return {
      // Refs
      telegramUserName,

      // Functions
      submitVote
    }
  }
}
</script>
