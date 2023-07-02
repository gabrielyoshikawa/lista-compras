<script>
    import { items } from "../components/stores";

    $: itemCount = $items.length;
    $: completedItemCount = $items.filter((item) => item.completed).length;
</script>

<header>
    <p>Lista de Compras</p>
    <p>{completedItemCount}/{itemCount}</p>
</header>

<style>
    header {
        min-height: 50px;
        width: 40%;
        background-color: rgb(228, 171, 85);
        display: flex;
        color: rgb(54, 50, 33);
        font-size: 2em;
        justify-content: space-between;
    }
</style>
