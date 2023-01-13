<script>

    import { onMount } from "svelte";

    import { each } from "svelte/internal";
    import App from "../App.svelte";

    import { items } from "../components/stores";
    import Item from "./Item.svelte";

    import TodoApi from "./TodoApi";

    function handleNewItem(e) {}

    function handleUpdate(e) {}

    function handleDelete(e) {}

    onMount(async () => {
        $items = await TodoApi.getAll();
        $items = [];
    });
</script>

<div class="list">

    {#each $items as item (item)}
        <Item {...item} />
    {:else}
        <p class="list-status">No items Exists</p>
    {/each}
</div>

<style>

    .list{
        padding: 15px;        
    }

    .list-status{
        margin: 0%;
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 1.1em;
    }

</style>

