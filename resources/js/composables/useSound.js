export function useSound(src) {
    const audio = new Audio(src);

    function play() {
        audio.currentTime = 0;
        audio.play().catch(() => {
             // Autoplay-policy or user-hasn't-interacted-yet errors land here.
        });
    }

    return { play };
}