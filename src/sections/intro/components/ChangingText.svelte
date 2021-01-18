<script lang='ts'>
    import { onDestroy, onMount } from "svelte";
    export let entries: string[] = [];

    let currentText = '';
    const waitTimeBetweenStroke = 90;
    let intervalRef: number;
    let reverseDirection = false;
    let currentEntryIndex = 0;

    function updateText() {
        const currentIndex = currentText.length;
        const currentEntry = entries[currentEntryIndex];

        if (reverseDirection && currentIndex === 0) {
            currentEntryIndex = entries[currentEntryIndex + 1] ? currentEntryIndex + 1 : 0;
            reverseDirection = false;
        } else if (currentIndex < currentEntry.length && !reverseDirection) {
            currentText = currentEntry.substr(0, currentIndex + 1);
        } else if (currentIndex === currentEntry.length && !reverseDirection) {
            clearInterval(intervalRef);
            const timeoutRef = setTimeout(() => {
                intervalRef = setInterval(updateText, waitTimeBetweenStroke);
                clearTimeout(timeoutRef);
                reverseDirection = true;
            }, waitTimeBetweenStroke * 14);
        } else if (currentIndex > 0) {
            currentText = currentEntry.substr(0, currentIndex - 1);
        }
    }

    updateText();
    onMount(() => intervalRef = setInterval(updateText, waitTimeBetweenStroke));
    onDestroy(() => clearInterval(intervalRef));
</script>

<span>
    {currentText}<span class="blinking-cursor">|</span>
</span>

<style>
    .blinking-cursor {
        animation: blinker .5s cubic-bezier(.1, 0, 0.4, 0.4) infinite alternate;  
    }

    @keyframes blinker { to { opacity: 0; } }
</style>