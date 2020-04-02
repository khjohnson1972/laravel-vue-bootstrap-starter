<template>
    <div class="mt-10">
        <h5>Example Component for &lt;Contact&gt;</h5>
        <form
            method="post"
            novalidate
            @submit="checkForm"
        >
            <!-- Email -->
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    id="email"
                    v-model="$v.form.email.$model"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': attemptSubmit && $v.form.email.$invalid }"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                >
                <div
                    v-if="!$v.form.email.required && attemptSubmit"
                    class="invalid-feedback"
                >
                    This field is required
                </div>
                <div
                    v-if="!$v.form.email.email && attemptSubmit"
                    class="invalid-feedback"
                >
                    Enter a valid email
                </div>

                <small
                    id="emailHelp"
                    class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
            </div>

            <button
                type="submit"
                class="btn btn-primary"
            >
                Submit
            </button>
        </form>
    </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            attemptSubmit: false,
            form: {
                email: ''
            }
        }
    },
    validations: {
        form: {
            email: { required, email }
        }
    },
    methods: {
        checkForm: function (e) {
            e.preventDefault()
            this.attemptSubmit = true

            if (this.name && this.phone && this.company && this.email && this.message) {
                return true
            }

            this.errors = {}

            if (!this.email) {
                this.missingEmail = true
                this.errors.email = 'Please enter your email.'
            }
            if (!this.name) {
                this.errors.name = 'Please enter your name.'
            }
            if (!this.phone) {
                this.errors.phone = 'Please enter your phone.'
            }
            if (!this.company) {
                this.errors.company = 'Please enter your company.'
            }
            if (!this.message) {
                this.errors.message = 'Please provide some message.'
            }
        },
        onSubmit: function (e) {
            e.preventDefault()
            alert('here')
        }
    }
}
</script>
