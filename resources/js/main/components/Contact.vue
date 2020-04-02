<template>
    <div class="mt-10">
        <h5>Example Component for &lt;Contact&gt;</h5>
        <form>
            <!-- Email -->
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    id="email"
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                >
                <small
                    id="emailHelp"
                    class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
            </div>

            <!-- Name -->
            <div class="form-group">
                <label for="name">Name</label>
                <input
                    id="name"
                    type="text"
                    class="form-control"
                    placeholder="Enter name"
                >
            </div>

            <!-- Company -->
            <div class="form-group">
                <label for="company">Company</label>
                <input
                    id="company"
                    type="text"
                    class="form-control"
                    placeholder="Company"
                >
            </div>

            <!-- Phone -->
            <div class="form-group">
                <label for="phone">Phone</label>
                <input
                    id="phone"
                    type="text"
                    class="form-control"
                    placeholder="Phone"
                >
            </div>

            <!-- Message -->
            <div class="form-group">
                <label for="message">Message</label>
                <textarea
                    id="message"
                    class="form-control"
                    placeholder="Message"
                >
                </textarea>
            </div>

            <button
                type="submit"
                class="btn btn-primary"
                @click="onSubmit"
            >
                Submit
            </button>
        </form>
    </div>
</template>
<script>
export default {
    methods: {
        onSubmit: function (e) {
            e.preventDefault()
            alert('here')
        }
    }
}
</script>
