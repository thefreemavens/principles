<template>
  <!-- <div class="flex flex-col justify-center items-center"> -->
    <div class="max-w-md mx-auto">

      <hr class="border-gray-100 dark:border-gray-700 my-6" />
      <h3 class="text-2xl my-4 tracking-wide-xl text-left">Request an Invite</h3>
      <!-- <hr class="border-gray-100 dark:border-gray-700 my-6" /> -->

    <form
      id="join"
      ref="formElement"
      class="text-left"
      @submit.prevent="formSubmit()"
    >
      <!-- First Name -->
      <div class="form-group group">
        <input
        class="peer"
        v-model="firstName"
        type="text"
        required="required"
        name="entry.1090129806"
        />
        <label
          for="firstName"
          class=""
        >
          First Name
        </label>
      </div>

      <!-- Last Name -->
      <div class="form-group group">
        <input
        class="peer w-full h-14 px-4 text-sm peer"
        v-model="lastName"
        type="text"
        required="required"
        name="entry.57994274"
        />
        <label for="lastName"
          class="
            flex
            items-center
            px-3
            text-base group-focus-within:text-xs peer-valid:text-xs
            top-3.5 group-focus-within:top-5 peer-valid:top-5
            group-focus-within:-translate-y-full peer-valid:-translate-y-full
        ">
          Last Name
        </label>
      </div>

      <!-- Email -->
      <div class="form-group group">
          <label for="user-email"> Email </label>
          <input
            class="peer"
            v-model="email"
            type="text"
            required="required"
            name="entry.1097449195"
          />
      </div>

      <!-- <div class="question">
        <h4 class="">Question 1</h4>
        <p>
          As to be understood from
          <NuxtLink to="../natural-law/"> Episode 1 </NuxtLink>
          , what does the old saying "There is nothing new under the sun"
          means?
        </p>
      </div> -->

      <!-- Form: Question 1 -->
      <!-- <div class="form-group">
          <textarea
            v-model="answerA"
            type="text"
            required="required"
            name="entry.568051769"
            cols="40"
            rows="5"
          />
      </div> -->

      <!-- <div class="question">
        <h4 class="">Question 2</h4>
        <p>
          As to be understood from
          <NuxtLink to="../natural-law/"> Episode 2 </NuxtLink>
          , Truth, by its very nature, is Beligerent. Why so?
        </p>
      </div> -->

      <!-- Form: Question 2 -->
      <!-- <div class="form-group">
          <textarea
            v-model="answerB"
            type="text"
            required="required"
            name="entry.660058584"
            cols="40"
            rows="5"
          />
      </div> -->

      <!-- <div class="question">
        <h4 class="">Question 3</h4>
        <p clas>
          As to be understood from
          <NuxtLink to="../natural-law/"> Episode 3 </NuxtLink>
          , what is considered to be a Logical Fallacy?
        </p>
      </div> -->

      <!-- Form: Question 2 -->
      <!-- <div class="form-group">
          <textarea
            v-model="answerC"
            type="text"
            required="required"
            name="entry.1154524792"
            cols="40"
            rows="5"
          />
      </div> -->

      <!-- Submit Button -->
        <button
          :disabled="invalid"
          class="
            w-full
            text-center
            mt-2
            bg-grey-975
            dark:bg-white
            text-white
            dark:text-grey-975
            py-2
            rounded
            font-bold
            uppercase
            text-xs
        ">
        Request Invite
      </button>

            <!-- Form Disclaimers -->
            <span class="text-xs text-gray-500">
        All submissions are kept secure and private.
      </span>

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