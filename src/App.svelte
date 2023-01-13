<script>
    import Header from "./components/Header.svelte";
    import List from "./components/List.svelte";
</script>

<div class="container">
    <Header/>
    
    <List/>
</div>

<style>
    .container {
        width: 1500px;
        background: rgb(128, 172, 128);
        height: 200px;
        font-size: 20px;
    }

    :global(.container *) {
        font-family: sans-serif;
    }
</style>