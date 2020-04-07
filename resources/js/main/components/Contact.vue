<template>
    <div class="mt-10">
        <h5>Example Component for &lt;Contact&gt;</h5>
        <form
            method="post"
            novalidate
            @submit.prevent="submit"
        >
            <!-- Name -->
            <div class="form-group">
                <label for="name">Name</label>
                <input
                    id="name"
                    v-model="$v.formData.name.$model"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.name.$invalid, 'is-valid': attemptSubmit && !$v.formData.name.$invalid }"
                    placeholder="Enter name"
                >
                <div
                    v-if="!$v.formData.name.required && attemptSubmit"
                    class="invalid-feedback"
                >
                    This field is required
                </div>
            </div>

            <!-- Company -->
            <div class="form-group">
                <label for="company">Company</label>
                <input
                    id="company"
                    v-model="$v.formData.company.$model"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.company.$invalid, 'is-valid': attemptSubmit && !$v.formData.company.$invalid }"
                    placeholder="Enter company"
                >
                <div
                    v-if="!$v.formData.company.required && attemptSubmit"
                    class="invalid-feedback"
                >
                    This field is required
                </div>
            </div>

            <!-- Email -->
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    id="email"
                    v-model="$v.formData.email.$model"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.email.$invalid, 'is-valid': attemptSubmit && !$v.formData.email.$invalid }"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                >
                <div
                    v-if="!$v.formData.email.required && attemptSubmit"
                    class="invalid-feedback"
                >
                    This field is required
                </div>
                <div
                    v-if="!$v.formData.email.email && attemptSubmit"
                    class="invalid-feedback"
                >
                    Enter a valid email
                </div>

                <small
                    id="emailHelp"
                    class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
            </div>

            <!-- Message -->
            <div class="form-group">
                <label for="name">Message</label>
                <textarea
                    id="message"
                    v-model="$v.formData.message.$model"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.message.$invalid, 'is-valid': attemptSubmit && !$v.formData.message.$invalid }"
                    placeholder="Enter a message"
                />
                <div
                    v-if="!$v.formData.message.required && attemptSubmit"
                    class="invalid-feedback"
                >
                    This field is required
                </div>
            </div>

            <!-- Button -->
            <button
                id="submit-button"
                type="submit"
                class="btn btn-primary"
                :disabled="submitStatus === 'PENDING'"
            >
                Submit
            </button>
            &nbsp;<a
                href="javascript:void(0)"
                @click="clearForm"
            >Clear</a>
            <p
                v-if="submitStatus === 'OK'"
                class="typo__p"
            >
                Thanks for your submission!
            </p>
            <p
                v-if="submitStatus === 'ERROR'"
                class="typo__p"
            >
                Please fill the form correctly.
            </p>
            <p
                v-if="submitStatus === 'PENDING'"
                class="typo__p"
            >
                Sending...
            </p>
        </form>
    </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  data: function () {
    return {
      errorMessage: null,
      formData: {
        email: '',
        name: '',
        company: '',
        message: ''
      },
      attemptSubmit: false,
      submitStatus: null
    }
  },
  validations: {
    formData: {
      email: { required, email },
      name: { required },
      company: { required },
      message: { required }
    }
  },
  methods: {
    async makeRequest () {
      const vm = this
      // send a POST request
      return axios.post(
        '/api/contacts',
        {
          name: this.formData.name,
          email: this.formData.email,
          company: this.formData.company,
          message: this.formData.message
        }
      )
        .then(function (response) {
          // handle success
          vm.clearForm()
          vm.submitStatus = 'OK'
          return response
        })
        .catch(function (error) {
          // handle error
          vm.errorMessage = 'Request failed'
          vm.submitStatus = 'FAILED'
          return error
        })
        // .then(function () {
        // always executed
        //  return
        // })
    },
    submit (e) {
      this.attemptSubmit = true

      this.$v.$touch()

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        this.makeRequest()
      }
    },
    clearForm: function () {
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  }
}
</script>
