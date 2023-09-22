<script>
    export let data
    console.log(data)
</script>
<div class="flex flex-col text-center self-center justify-between bg-rose-950 text-sm sm:text-xl lg:text-[2rem] text-rose-200 my-auto p-8 font-normal sm:font-bold sm:p-16 rounded-3xl max-h-[80vh] overflow-y-scroll">
    <div class="grid gap-x-16 sm:gap-x-28 md:gap-x-32 lg:gap-x-[14rem] grid-cols-3 opacity-40 mb-8">
        <h3>PRICE</h3>
        <h3>NICKNAME</h3>
        <h3>DATE</h3>
    </div>
    {#each data.bids as item}
        <div class="grid gap-x-16 sm:gap-x-28 md:gap-x-32 lg:gap-x-[14rem] grid-cols-3 mb-4">
            <h3>{item.price + '$'}</h3>
            <h3 class="text-clip sm:text-ellipsis overflow-hidden">{item.name}</h3>
            <h3>{item.created_at.slice(5, 16).replace('T', ' ')}</h3>
        </div>
    {/each}
    <a href="/" class="min-w-full flex justify-center">
        <button class="rounded-full border-2 border-rose-200 py-2 lg:py-4 mt-8 min-w-[30%] transition-all hover:brightness-90 active:scale-90">
            exit
        </button>
    </a>
</div>