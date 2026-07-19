<template>
    <div class="main-bg" style="flex-direction: column">
        <SiteCredit>
            <template #start>
                <router-link
                    to="/"
                    class="btn white-button"
                    aria-label="Back to home"
                    @click="playClickSound"
                >
                    <BackButton />
                </router-link>
                <div
                    class="card secondary-logo-card"
                >
                    <img :src="logo" class="logo-size" alt="oceanbooth logo" />
                </div>
                <p class="logo-title">OceanBooth</p>

            </template>
        </SiteCredit>
    </div>
</template>

<script>
import SiteCredit from "@components/SiteCredit.vue";
import BackButton from "@components/svgs/BackButton.vue";
import logo from "@assets/images/logo.svg";
import clickSfx from "@assets/sfx/click.mp3";
import { useSound } from "@composables/useSound";

export default {
    name: "TemplateSelection",
    components: {
        SiteCredit,
        BackButton,
    },
    setup() {
        const { play: playClickSound } = useSound(clickSfx);
        return { playClickSound, logo };
    },
};
</script>

<style scoped>
.logo-size {
    width: 1.4rem;
    height: 1.4rem;
}

</style>