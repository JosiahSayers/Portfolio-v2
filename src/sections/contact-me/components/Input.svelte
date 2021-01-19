<script lang="ts">
    export let formSubmitted: boolean;
    export let inputLabel: string;
    export let placeholder = inputLabel;
    export let id: string;
    export let isValid: (val: string) => boolean;
    export let errorMessage: string;
    export let updateValue: (newVal: string) => void;

    let value = '';
</script>

<div class="field">
    <label class="label" for={id}>{inputLabel}</label>
    <div class="control">
        <input 
            class="input"
            class:is-danger={formSubmitted && !isValid(value)}
            class:is-success={isValid(value)}
            type="text"
            {placeholder}
            {id} 
            bind:value
            on:keyup={() => updateValue(value)}
        />
    </div>
    {#if formSubmitted && !isValid(value)}
        <p class="help is-danger">{errorMessage}</p>
    {/if}
</div>