<script>
    import { page } from "$app/state";
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
    } from "flowbite-svelte";
    let activeUrl = $derived(page.url.pathname);
    import { pages_schema } from "./pages";
</script>

<Navbar class="bg-primary-200">
    <NavBrand href="/">
        <img src="/hampter.jpg" class="me-3 h-6 sm:h-9" alt="Site logo" />
        <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >/home/matt022</span
        >
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
        {#each pages_schema as page}
            <NavLi href={page.path}>{page.name}</NavLi>
        {/each}
    </NavUl>
</Navbar>
