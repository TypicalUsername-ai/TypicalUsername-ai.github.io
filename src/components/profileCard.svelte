<script lang="ts">
    import { Card, Avatar } from "flowbite-svelte";
    import {
        GithubSolid,
        GitlabSolid,
        LinkedinSolid,
    } from "flowbite-svelte-icons";
    import { A, P } from "flowbite-svelte";
</script>

<Card
    size="lg"
    class="p-4 m-4 grid grid-rows-2 grid-cols-3 content-end border-1 border-accent"
>
    <Avatar size="xl" class="col-span-1 row-span-1" src="/hampter.jpg" />
    <div class="col-span-2 row-span-1 content-center">
        <h5 class="text-3xl font-bold text-accent">Hi, I'm Mateusz</h5>
        <span class="text-primary-600">and i like solving problems</span>
    </div>
    <div class="col-span-1 row-span-2 flex flex-col gap-2">
        <h6 class="text-accent font-bold">My Links:</h6>
        <A
            class="flex flex-row items-center"
            href="https://github.com/TypicalUsername-ai"
        >
            <GithubSolid color="black" /> TypicalUsername-ai
        </A>
        <A
            class="flex flex-row items-center"
            href="https://gitlab.torproject.org/matt022"
        >
            <GitlabSolid class="text-black" /> matt022
        </A>
        <A
            class="flex flex-row items-center"
            href="https://www.linkedin.com/in/022-mateusz-domalewski/"
        >
            <LinkedinSolid color="black" /> Mateusz Domalewski
        </A>
    </div>
    <P size="lg" class="col-span-2 row-span-2"
        >Currently working toward finishing my Master's degree in Applied
        computer science. I have a keen interest in DevOps, cybersecurity and
        Open Source. I thoroughly enjoy NixOS and the Rust Programming language.
    </P>
</Card>
