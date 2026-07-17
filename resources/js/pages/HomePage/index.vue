<template>
    <div class="main-bg" style="flex-direction: column">
        <HeroSection />
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex flex-row" style="margin-top: 30%">
                <div
                    class="card logo-card p-2 text-center align-items-center justify-content-center"
                >
                    <img :src="logo" class="logo-size" alt="oceanbooth logo" />
                </div>
                <h2>OceanBooth</h2>
            </div>
            <p class="description text-center">
                Tap Start to ride the ultimate vibe wave and turn your<br />
                photos into awesome retro polaroids instantly without<br />
                getting annoying sand in your shoes!
            </p>
            <button class="btn pink-button" href="#" role="button">
                Start Session
            </button>
            <div class="polaroid-card card p-3 text-left">
                Recent Polaroids
                <p class="polaroid-card-placeholder text-center">
                     <NullIndicator /> no polaroids yet
                </p>
            </div>
        </div>
        <img :src="homeBg" class="home-bg" alt="wave background" />
        <div class="absolute-bg-container">
            <img :src="homeDecor1" class="home-decor-1 float" alt="polaroid" style="width: 370px;" />
            <img :src="homeDecor2" class="home-decor-2 float" alt="polaroid" style="width: 370px; margin-left: -130px; margin-bottom: -220px" />
            <img :src="homeDecor3" class="home-decor-3 float" alt="polaroid" style="width: 370px; margin-left: -40px;" />
        </div>
    </div>
</template>

<script>
import HeroSection from "@components/HeroSection.vue"
import NullIndicator from "@components/svgs/NullIndicator.vue"
import logo from "@assets/images/logo.svg";
import homeBg from "@assets/images/home-bg.svg";
import homeDecor1 from "@assets/images/home-decor-1.svg";
import homeDecor2 from "@assets/images/home-decor-2.svg";
import homeDecor3 from "@assets/images/home-decor-3.svg";

export default {
    name: "HomePage",
    components: {
        HeroSection,
        NullIndicator,
    },
    data() {
        return {
            logo,
            homeBg,
            homeDecor1,
            homeDecor2,
            homeDecor3
        };
    },
};
</script>

<style scoped>
h2 {
    font-family: "Cardo", serif;
    font-weight: 700;
}
.description {
    margin-top: 4%;
    margin-bottom: 8%;
}
.pink-button {
    margin-bottom: 30%;
}
.polaroid-card {
    border-radius: 15px;
    box-shadow: 0 4px 0px rgba(0, 0, 0, 0.319);
    border: 1px solid black;
    position: relative;
    z-index: 1;
}
.polaroid-card-placeholder {
    font-style: italic;
    color: #c5c5c5;
    font-size: small;
    width: 12rem;
    height: 2rem;
    margin-top: 8%;
}
.home-bg {
    width: 100%;
    display: block;
    margin-top: auto;
}
.absolute-bg-container {
    position: absolute;  
    bottom: 0;
    z-index: 0;
}
.float {
    animation: float 3s ease-in-out infinite;
}
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px)}
}
.float:nth-child(1) {
    animation-delay: 0s;
}
.float:nth-child(2) {
    animation-delay: 0.5s;
}
.float:nth-child(3) {
    animation-delay: 1s;
}
</style>
