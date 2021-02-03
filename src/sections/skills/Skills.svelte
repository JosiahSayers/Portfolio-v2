<script lang="ts">
    import Section from "../../components/Section.svelte";
    export let id: string;
    import { SKILL_LIST } from "./skill-list";
</script>

<Section {id} title="Skills">
    {#each SKILL_LIST as category}
        <div class="category">
            <h2 class="subtitle">{category.category}</h2>

            <div class="content">
                <ul>
                    {#each category.technologies as technology}
                        <li>{technology.name}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/each}
</Section>
