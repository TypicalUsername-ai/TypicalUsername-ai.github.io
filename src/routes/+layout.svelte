<script lang="ts">
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<div class="bg-secondary-400 min-h-screen flex flex-col">
    <Navbar />
    <div class="flex-grow">
        {@render children()}
    </div>
    <Footer />
</div>
