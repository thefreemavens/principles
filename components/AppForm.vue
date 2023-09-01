<template>
  <div class="flex justify-center items-center">
    Form

    <form
      id="join"
      ref="formElement"
      class="text-left"
      @submit.prevent="formSubmit()"
    >
      <hr class="border-gray-100 dark:border-gray-700 my-6" />
      <h3
        class="font-serif text-2xl my-4 uppercase tracking-wide-xl text-center"
      >
        Contact
      </h3>
      <hr class="border-gray-100 dark:border-gray-700 my-6" />
      <!-- First Name -->
      <div class="form-group">
        <!-- <validation-provider v-slot="{ errors }" rules="required|alpha"> -->
          <label for="firstName">First Name</label>
          <input
            v-model="firstName"
            type="text"
            required="required"
            name="entry.1090129806"
          />
        <!-- </validation-provider> -->
      </div>

      <!-- Last Name -->
      <div class="form-group">
        <!-- <validation-provider v-slot="{ errors }" rules="required|alpha"> -->
          <label for="lastName">Last Name</label>
          <input
            v-model="lastName"
            type="text"
            required="required"
            name="entry.57994274"
          />
        <!-- </validation-provider> -->
      </div>

      <!-- Email -->
      <div class="form-group">
        <!-- <validation-provider v-slot="{ errors }" rules="required|email"> -->
          <label for="user-email"> Email </label>
          <input
            v-model="email"
            type="text"
            required="required"
            name="entry.1097449195"
          />
        <!-- </validation-provider> -->
      </div>

      <div class="question">
        <h4 class="">Question 1</h4>
        <p>
          As to be understood from
          <NuxtLink to="../natural-law/"> Episode 1 </NuxtLink>
          , what does the old saying "There is nothing new under the sun"
          means?
        </p>
      </div>

      <!-- Form: Question 1 -->
      <div class="form-group">
          <textarea
            v-model="answerA"
            type="text"
            required="required"
            name="entry.568051769"
            cols="40"
            rows="5"
          />
      </div>

      <div class="question">
        <h4 class="">Question 2</h4>
        <p>
          As to be understood from
          <NuxtLink to="../natural-law/"> Episode 2 </NuxtLink>
          , Truth, by its very nature, is Beligerent. Why so?
        </p>
      </div>

      <!-- Form: Question 2 -->
      <div class="form-group">
          <textarea
            v-model="answerB"
            type="text"
            required="required"
            name="entry.660058584"
            cols="40"
            rows="5"
          />
      </div>

      <div class="question">
        <h4 class="">Question 3</h4>
        <p clas>
          As to be understood from
          <NuxtLink to="../natural-law/"> Episode 3 </NuxtLink>
          , what is considered to be a Logical Fallacy?
        </p>
      </div>

      <!-- Form: Question 2 -->
      <div class="form-group">
          <textarea
            v-model="answerC"
            type="text"
            required="required"
            name="entry.1154524792"
            cols="40"
            rows="5"
          />
      </div>

      <!-- Form Disclaimers -->
      <ol
        class="text-left -mt-2 text-xs text-gray-500 list-outsude pl-4 list-decimal"
      >
        <li class="pl-2">
          All submissions are private and will never be published.
        </li>
        <li class="pl-2">
          Submissions that are not in the English language will be rejected.
        </li>
        <li class="pl-2">Processing may take up to 6 days.</li>
      </ol>

      <!-- Submit Button -->
      <div class="w-full text-center my-10">
        <button>Send</button>
        <!-- <AppButton
          :disabled="invalid"
          title="Get Initiated"
          class="fill-c text-sm"
        /> -->
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      answerA: null,
      answerB: null,
      answerC: null,
    }
  },
  methods: {
    formSubmit() {
      // const axios = $axios
      const vm = this
      const formElement = vm.$refs.formElement
      const formData = new FormData(formElement)
      const url =
        'https://docs.google.com/forms/d/e/1FAIpQLSc02pJW9A3vfC9nkzhkx5R3DajMl7vvO7kNCc5S9QWQ7rd4DA/formResponse'
      this.errors = []
      axios
        .post(url, formData)
        .then(function (response) {
          // eslint-disable-next-line no-undef
          $nuxt.$router.push('/initiation/confirmation')
        })
        // eslint-disable-next-line handle-callback-err
        // eslint-disable-next-line node/handle-callback-err
        .catch(function (error) {
          // eslint-disable-next-line no-undef
          $nuxt.$router.push('/initiation/confirmation')
        })
    },
  },
}
</script>