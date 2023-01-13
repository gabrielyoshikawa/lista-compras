<script>
    import Header from "./components/Header.svelte";
    import List from "./components/List.svelte";
    import Item from "./components/Item.svelte";
</script>

<div class="container">
    <Header/>
    
    <List/>
</div>

<style>
    .container {
        width: 1000px;
        background: rgb(128, 172, 128);
        font-size: 20px;
    }

    :global(.container *) {
        font-family: sans-serif;
    }
</style>