
<script lang="ts">
    import  type { LayoutServerData } from "./$types";
    export let data:LayoutServerData;
</script>


<div> 

    {#if data?.suc}
      <span><form action="/user/login?/logout" method="post"><input type="submit" value="Logout"></form>{data.userd?.name}</span>
      {:else}
      <span><a href="/user">Login here:</a></span>
    {/if}
</div>

<slot></slot>
<style>
    div{
        position: fixed;
        width: 100%;
    }
    span{
        float: right;
    }
</style>