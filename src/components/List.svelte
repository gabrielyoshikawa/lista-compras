<script>
    import { onMount } from "svelte";
    import { v4 as uuidv4 } from "uuid";
    import { items } from "../components/stores";
    import Item from "./Item.svelte";
    import TodoApi from "./TodoApi";
    import NewItem from "./NewItem.svelte";

    function handleNewItem(e) {
        $items = [
            {
                id: uuidv4(),
                text: e.detail,
                completed: false,
            },
            ...$items,
        ];

        TodoApi.save($items);
    }

    function handleUpdate(e) {
        const index = $items.findIndex((item) => item.id === e.detail.id);
        $items[index] = e.detail;
        TodoApi.save($items);
    }

    function handleDelete(e) {
        $items = $items.filter((item) => item.id !== e.detail);
        TodoApi.save($items);
    }

    let itemsSorted = [];

     $: {
        itemsSorted = [...$items];
        itemsSorted.sort((a, b) => {
            if (a.completed && b.completed) return 0;
            if (a.completed) return 1;
            if (b.completed) return -1;
        });
    }

    onMount(async () => {
        $items = await TodoApi.getAll();
    });
</script>

<div class="list">
    <NewItem on:newitem={handleNewItem} />
    {#each itemsSorted as item (item)}
        <Item {...item} on:update={handleUpdate} on:delete={handleDelete} />
    {/each}
</div>

<style>
    .list {
        width: 40%;
        min-height: 85vh;
        background-color: rgb(146, 91, 9);
    }

</style>
