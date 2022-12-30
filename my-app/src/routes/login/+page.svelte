<script lang="ts">
    import type { ActionData } from "./$types";
    export let form:ActionData;
</script>

<form  method="post" action="/login">
    <input type="text" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Password">
    <input type="submit" value="Login">
</form>

{#if form?.success==true}
    Succesfully logged in <a href="/">Go home</a>
    {:else if form?.success==false}
    Login failed
{/if}
<style>
    form{
        display: flex;
        flex-direction: column;
        width: fit-content;
        padding: 10px;
    }
    input{
        padding: 10px;
        margin: 15px;
    }
</style>