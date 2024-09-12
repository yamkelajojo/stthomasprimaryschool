<template>
    <div class="badge red">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px"
            viewBox="0 0 216 232">
            <path fill="#2B2B2B"
                d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169    c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
        </svg>
        <p class="title">BRUTEFORCE EXPERT</p>
        <p class="subtitle">CTF 365</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(https://fonts.googleapis.com/css?family=Fjalla+One);

.badge {
    position: relative;
    width: 216px;
    display: inline-block;

    .title {
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 1.7em;
        position: absolute;
        top: -28px;
        border-radius: 8px 8px 0 0;
        text-align: center;
        width: 100%;
        background: red;
        padding: 20px 0;
    }

    .subtitle {
        position: absolute;
        font-family: "Fjalla One", sans-serif;
        font-size: 1.8em;
        width: 100%;
        text-align: center;
        color: white;
        position: absolute;
        top: 100px;

        &:after {
            content: "★ ★ ★";
            display: block;
            font-size: .4em;
            position: relative;
            margin: 15px 0 0;
            transition: all .3s;
        }
    }

    &:hover .subtitle:after {
        word-spacing: 30px;
    }
}

@mixin setColor($color) {
    .title {
        background: $color;
    }

    .subtitle:after {
        color: $color;
    }
}

.red {
    @include setColor(#DC514E);
}

.green {
    @include setColor(#2ecc71);
}

.gray {
    @include setColor(#95a5a6);
}

.yellow {
    @include setColor(#f1c40f);
}

.blue {
    @include setColor(#3498db);
}
</style>