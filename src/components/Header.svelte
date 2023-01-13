<script>
    import { items } from "../components/stores";

    $: itemCount = $items.length;
    $: completedItemCount = $items.filter(item => item.completed).length;

</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        color: white;
        font-weight: bold;
        font-size: 1.5em;
        background: black;
    }
</style>

<div class="header">
    <span>To-do List</span>
    <span>{completedItemCount}/{itemCount}</span>
</div>