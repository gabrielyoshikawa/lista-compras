// Tasks

import { writable } from "svelte/store";

export const items = writable([

    {
        id: 1,
        text: "AAA",
        completed: false
    },
    {
        id: 2,
        text: "BBB",
        completed: true
    },
]); 