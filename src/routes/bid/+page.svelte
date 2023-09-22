<script>
    import { enhance } from '$app/forms'
    export let form
    export let data
    $: topPrice = data.price + '$'
    $: topPriceName = data.name

    $: if (form?.price) {
        topPrice = form.price + '$'
        topPriceName = form.name
    }
</script>
<div class="flex flex-col text-center self-center justify-center max-w-max bg-rose-950 text-rose-200 my-auto p-8 sm:p-16 rounded-3xl">
    <h3 class="text-lg sm:text-xl lg:text-[2rem] opacity-50 mb-4">CURRENT TOP BID</h3>
    <h2 class="text-xl sm:text-3xl lg:text-7xl mb-20 font-extrabold">{topPrice ?? '0.00$'}<span class="opacity-50 px-8">by</span>{topPriceName ?? 'none'}</h2>
    <form method="POST" use:enhance>
        <h3 class="text-lg sm:text-xl lg:text-[2rem] text-left opacity-50 mb-4">YOUR BID</h3>
        <div class="flex flex-col gap-4">
            <input required disabled={form?.success} name="price" type="number" placeholder="price" class="text-base sm:text-xl lg:text-2xl font-extrabold placeholder:text-rose-200 placeholder:opacity-50 text-center rounded-full py-2 lg:py-4 bg-transparent border-2 lg:border-4 border-rose-200">
            <input required maxlength="10" disabled={form?.success} name="name" type="text" placeholder="name" class="text-base sm:text-xl lg:text-2xl font-extrabold placeholder:text-rose-200 placeholder:opacity-50 text-center rounded-full py-2 lg:py-4 bg-transparent border-2 lg:border-4 border-rose-200">
        </div>
        <div class="flex gap-2 lg:gap-4 mt-8 text-base sm:text-xl lg:text-2xl">
            <button disabled={form?.success} class="bg-rose-200 text-rose-950 disabled:opacity-50 rounded-full border-2 border-pink-950 min-w-[50%] py-2 lg:py-4 transition-all hover:enabled:brightness-90 active:enabled:scale-90">
                submit
            </button>
            <a href="/" class="min-w-[50%]">
                <button class="rounded-full border-2 border-rose-200 py-2 lg:py-4 min-w-full transition-all hover:brightness-90 active:scale-90">
                    cancel
                </button>
            </a>
        </div>
    </form>
    {#if form?.error}
        <h2 class="text-base sm:text-xl lg:text-2xl mt-8">Unexpected error. Restart the page and try again</h2>
    {/if}
    {#if form && !form?.success}
        <h2 class="text-base sm:text-xl lg:text-2xl mt-8">Your bid is lower than current top bid</h2>
    {/if}
    {#if form?.success}
        <h2 class="text-base sm:text-xl lg:text-2xl mt-8">Success!</h2>
    {/if}
</div>