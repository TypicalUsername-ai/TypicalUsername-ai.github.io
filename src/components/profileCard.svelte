<script lang="ts">
    import { Card, Avatar } from "flowbite-svelte";
</script>

<Card size="lg" class="p-4 m-4 grid grid-rows-2 grid-cols-3 content-end">
    <Avatar size="xl" class="col-span-1 row-span-1" src="/hampter.jpg" />
    <div class="col-span-2 row-span-1 content-center">
        <h5 class="text-3xl font-bold bg-red-100">Hi, I'm Mateusz</h5>
        <span class="bg-blue-100">and i like programming</span>
    </div>
    <div class="bg-orange-100 col-span-1 row-span-2 flex flex-col">
        <h6>SM links or sth</h6>
        <ul>
            <li>sth here</li>
            <li>sth here</li>
            <li>sth here</li>
            <li>sth here</li>
        </ul>
    </div>
    <span class="bg-violet-100 col-span-2 row-span-2"> my bio </span>
</Card>
