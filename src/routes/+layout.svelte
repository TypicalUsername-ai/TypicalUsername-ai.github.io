<script lang="ts">
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<div class="bg-primary-50 min-h-screen flex flex-col">
    <Navbar />
    <div class="flex-grow p-1">
        {@render children()}
    </div>
    <Footer />
</div>
