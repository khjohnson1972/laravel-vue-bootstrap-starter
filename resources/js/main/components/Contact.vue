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
                    v-model="formData.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.name.$invalid, 'is-valid': attemptSubmit && !$v.formData.name.$invalid }"
                    placeholder="Enter name"
                >
                <div
                    v-if="$v.formData.name.$invalid && attemptSubmit"
                    class="invalid-feedback d-block"
                >
                    {{ $v.formData.name.$errors[0].$message }}
                </div>
            </div>

            <!-- Company -->
            <div class="form-group">
                <label for="company">Company</label>
                <input
                    id="company"
                    v-model="formData.company"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.company.$invalid, 'is-valid': attemptSubmit && !$v.formData.company.$invalid }"
                    placeholder="Enter company"
                >
                <div
                    v-if="$v.formData.company.$invalid && attemptSubmit"
                    class="invalid-feedback d-block"
                >
                    {{ $v.formData.company.$errors[0].$message }}
                </div>
            </div>

            <!-- Email -->
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.email.$invalid, 'is-valid': attemptSubmit && !$v.formData.email.$invalid }"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                >
                <div
                    v-if="$v.formData.email.$invalid && attemptSubmit"
                    class="invalid-feedback d-block"
                >
                    {{ $v.formData.email.$errors[0].$message }}
                </div>
                <small
                    id="emailHelp"
                    class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
            </div>

            <!-- Phone -->
            <div class="form-group">
                <label for="phone">Phone number</label>
                <input
                    id="phone"
                    v-model="formData.phone"
                    type="phone"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.phone.$invalid, 'is-valid': attemptSubmit && !$v.formData.phone.$invalid }"
                    placeholder="###-###-####"
                >
                <div
                    v-if="$v.formData.phone.$invalid && attemptSubmit"
                    class="invalid-feedback d-block"
                >
                    {{ $v.formData.phone.$errors[0].$message }}
                </div>
            </div>

            <!-- Message -->
            <div class="form-group">
                <label for="name">Message</label>
                <textarea
                    id="message"
                    v-model="formData.message"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.message.$invalid, 'is-valid': attemptSubmit && !$v.formData.message.$invalid }"
                    placeholder="Enter a message"
                />
                <div
                    v-if="$v.formData.message.$invalid && attemptSubmit"
                    class="invalid-feedback d-block"
                >
                    {{ $v.formData.message.$errors[0].$message }}
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
                class="alert alert-success mt-2"
            >
                Thanks for your submission!
            </p>
            <p
                v-if="submitStatus === 'ERROR'"
                class="alert alert-warning mt-2"
            >
                Please fill the form correctly.
            </p>
            <p
                v-if="submitStatus === 'PENDING'"
                class="alert alert-info mt-2"
            >
                Sending...
            </p>
            <p
                v-if="submitStatus === 'FAILED'"
                class="alert alert-danger mt-2"
            >
                Failed to complete your request
            </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
import { required, email, maxLength, minLength } from '@vuelidate/validators'

export default {
  data: function () {
    return {
      errorMessage: null,
      formData: {
        email: '',
        phone: '',
        name: '',
        company: '',
        message: ''
      },
      attemptSubmit: false,
      submitStatus: null
    }
  },
  validations: function () {
    return {
      formData: {
        email: { required, email, maxLength: maxLength(255) },
        phone: { required, maxLength: maxLength(255) },
        name: { required, maxLength: maxLength(255), minLength: minLength(2) },
        company: { required, maxLength: maxLength(255), minLength: minLength(2) },
        message: { required, minLength: minLength(10) }
      }
    }
  },
  methods: {
    async makeRequest () {
      try {
        const vm = this
        // send a POST request
        return axios.post(
          '/api/contacts',
          {
            name: this.formData.name,
            email: this.formData.email,
            phone: this.formData.phone,
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
      } catch (ex) {
        console.log(ex)
      }
    },
    submit (e) {
      this.attemptSubmit = true
      this.$v.$touch()

      // console.log(JSON.stringify(this.$v.formData, null, 4))

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        this.makeRequest()
      }
    },
    clearForm: function () {
      this.$v.$reset()
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  }
}
</script>
