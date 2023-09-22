<script>
    import "../app.css";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap" rel="stylesheet">
    <title>Bow Tie Auction</title>
</svelte:head>

<a href="/">
    <svg class="logo mx-auto my-0 max-w-[30%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124" width="96" height="96">
        <path fill="#FFB3B4" d="M37 68c7 8 25 9 34 5 9-5 17-16 17-16 40 50-61 41-81 36l30-25z"/>
        <path fill="#FFB3B4" d="M116 30C96 25-4 17 37 68c0 0 9-9 18-13 13-7 25-8 33 2l28-27z"/>
    </svg>
</a>
<slot />

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.neutral.900);
        height: 100%;
        overflow-y: hidden;
        color-scheme: dark;
        font-family: 'Syne', sans-serif;
    }
    :global(body) {
        height: 100%;
        display: flex;
        flex-direction: column;
        font-weight: bold;
    }
    .logo {
        max-width: 30%;
        animation: scale 1.5s cubic-bezier(1,0,.6,1), centertotop 2s 1.5s cubic-bezier(1,.2,.4,1);
    }
    @keyframes scale {
        from {
            margin-top: 50vh;
            margin-bottom: 50vh;
            transform: scale(3);
        }
        30% {
            margin-top: 50vh;
            margin-bottom: 50vh;
            transform: scale(3);
        }
        to {
            margin-top: 50vh;
            margin-bottom: 50vh;
            transform: scale(1);
        }
    }
    @keyframes centertotop {
        from {
            margin-top: 50vh;
            margin-bottom: 50vh;
        }
        30% {
            margin-top: 50vh;
            margin-bottom: 50vh;
        }
        to {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>