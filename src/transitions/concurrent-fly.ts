import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/types/runtime/transition';

export function concurrentFly(node: Element, {
    delay = 0,
    duration = 400,
    easing = cubicOut,
    x = 0,
    y = 0,
    opacity = 0,
    position = 'relative'
}): TransitionConfig {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;

    const od = target_opacity * (1 - opacity);

    return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
            opacity: ${target_opacity - (od * u)};
            position: ${position};`
    };
}