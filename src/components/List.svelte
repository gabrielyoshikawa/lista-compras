<script>

    import { onMount } from "svelte";

    import { items } from "../components/stores";

    import TodoApi from "./TodoApi";

    function handleNewItem(e) {}

    function handleUpdate(e) {}

    function handleDelete(e) {}

    onMount(async () => {

    $items = await TodoApi.getAll();          

    });
</script>