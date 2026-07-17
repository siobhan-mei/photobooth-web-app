<template>
    <div class="hero-section">
        made with ❤️ by @siobhan-mei
    </div>
</template>
<script>
    export default {
        name: "HeroSection",
        data() {
            return {
                
            }
        }
    }
</script>
<style>
    .hero-section {
    min-height: 10vh;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: end;
    padding-right: 3rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    font-family: var(--font-cursive);
    font-size: 20px;
    color: #c5c5c5;
}
</style>

