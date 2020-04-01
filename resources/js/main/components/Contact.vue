<template>
    <div class="mt-10">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                    id="exampleInputEmail1"
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
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                    id="exampleInputPassword1"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                >
            </div>
            <div class="form-check">
                <input
                    id="exampleCheck1"
                    type="checkbox"
                    class="form-check-input"
                >
                <label
                    class="form-check-label"
                    for="exampleCheck1"
                >Check me out</label>
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
export default {
    methods: {
        onSubmit: function () {
            alert('here')
        }
    }
}
</script>
