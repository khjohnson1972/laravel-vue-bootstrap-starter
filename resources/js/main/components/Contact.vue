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
                <div
                    v-if="!$v.formData.name.maxLength && attemptSubmit"
                    class="invalid-feedback"
                >
                    This maximum is 255
                </div>
                <div
                    v-if="!$v.formData.name.minLength && attemptSubmit"
                    class="invalid-feedback"
                >
                    This minimum length is 2
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
                <div
                    v-if="!$v.formData.company.maxLength && attemptSubmit"
                    class="invalid-feedback"
                >
                    This maximum is 255
                </div>
                <div
                    v-if="!$v.formData.company.minLength && attemptSubmit"
                    class="invalid-feedback"
                >
                    This minimum length is 2
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

                <div
                    v-if="!$v.formData.email.maxLength && attemptSubmit"
                    class="invalid-feedback"
                >
                    This maximum is 255
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
                    v-model="$v.formData.phone.$model"
                    type="phone"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.formData.phone.$invalid, 'is-valid': attemptSubmit && !$v.formData.phone.$invalid }"
                    placeholder="###-###-####"
                >
                <div
                    v-if="!$v.formData.phone.required && attemptSubmit"
                    class="invalid-feedback"
                >
                    This field is required
                </div>
                <div
                    v-if="!$v.formData.phone.maxLength && attemptSubmit"
                    class="invalid-feedback"
                >
                    This maximum is 255
                </div>
            </div>

            <!-- Message -->
            <div class="form-group">
                <label for="name">Message</label>
                <textarea
                    id="message"
                    v-model="$v.formData.message.$model"
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
                <div
                    v-if="!$v.formData.message.minLength && attemptSubmit"
                    class="invalid-feedback"
                >
                    Please tell us more
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
import { required, email, maxLength, minLength } from 'vuelidate/lib/validators'
import axios from 'axios'

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
  validations: {
    formData: {
      email: { required, email, maxLength: maxLength(255) },
      phone: { required, maxLength: maxLength(255) },
      name: { required, maxLength: maxLength(255), minLength: minLength(2) },
      company: { required, maxLength: maxLength(255), minLength: minLength(2) },
      message: { required, minLength: minLength(10) }
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
      this.$v.$reset()
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  }
}
</script>
