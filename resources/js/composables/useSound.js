export function useSound(src, volume = 1) {
    const audio = new Audio(src);
    audio.volume = volume;

    function play() {
        audio.currentTime = 0;
        audio.play().catch(() => {
             // Autoplay-policy or user-hasn't-interacted-yet errors land here.
        });
    }

    return { play };
}