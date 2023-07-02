<script>
    import Header from "./components/Header.svelte";
    import List from "./components/List.svelte";
</script>

<div class="content">
    <Header />
    <List />
</div>

<style>
    .content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
