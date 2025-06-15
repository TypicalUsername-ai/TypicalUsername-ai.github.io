<script>
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterBrand,
        FooterLink,
    } from "flowbite-svelte";
</script>

<Footer footerType="logo" class="bg-primary-200">
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterBrand
            href="/"
            src="/hampter.jpg"
            alt="Hamster Logo"
            name="Home"
        />
        <FooterLinkGroup
            class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
            <FooterLink href="/about">About</FooterLink>
        </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <FooterCopyright href="/" by="Mateusz Domalewski" />
</Footer>
