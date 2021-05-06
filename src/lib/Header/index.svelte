<script>
    let showBurgerMenu = false;
    const burgerMenuClass = "w-full flex flex-col md:flex-row md:flex justify-end text-xl space-y-6 md:space-y-0 md:space-x-6 ";

    function handleBurgerToggle() {
        showBurgerMenu = !showBurgerMenu;
    }
</script>

<nav class="bg-gb1 fixed w-screen min-h-20">
    <div class="container mx-auto px-10 py-5">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div class="w-full flex flex-row justify-between items-center">
                <img 
                    class="md:h-16 h-10 flex-shrink"
                    src="/logo-black.svg" 
                    alt="Gibki Logo" 
                />
                {#if showBurgerMenu == false}
                    <svg viewBox="0 0 100 80" class="h-5 w-5 mb-2 block md:hidden text-gb2 fill-current" on:click="{handleBurgerToggle}">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                {:else}
                    <svg on:click="{handleBurgerToggle}" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"
                        stroke-linejoin="round" class="h-6 w-6 mb-2 block md:hidden text-gb2 fill-current">
                        <line x1="22" y1="6" x2="6" y2="22"></line>
                        <line x1="6" y1="6" x2="22" y2="22"></line>
                    </svg>
                {/if}
            </div>
            <ul class="{showBurgerMenu ? burgerMenuClass : burgerMenuClass + 'hidden'}">
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="mailto:hello@gibki.io">
                        Inquire
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>