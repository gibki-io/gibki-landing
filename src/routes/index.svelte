<script>
    import Header from '$lib/Header/index.svelte';
    import Footer from '$lib/Footer/index.svelte';
</script>

<title>Gibki Labs - Digital Transformation Agency</title>

<main class="flex flex-col w-full">
    <Header />
    <section class="bg-gb1 flex flex-col w-full min-h-screen pt-20">
        <div class="container mx-auto my-auto px-10 pt-20 lg:pt-0 flex flex-col">
            <div class="flex flex-col md:flex-row justify-between items-center w-full my-auto">
                <div class="flex flex-col mb-20 max-w-xl">
                    <h1 class="md:text-6xl text-4xl font-semibold font-poppins">
                        Realign. Reinvent. Reimagine.
                    </h1>
                    <h3 class="text-2xl font-medium mt-4 mb-14">
                        Digital transformation solutions for small businesses.
                    </h3>
                    <a class="px-5 py-3 bg-gb3 text-gb5 w-full md:w-64 text-xl rounded-md font-medium shadow-lg text-center self-center md:self-start" href="mailto:hello@gibki.io">
                        contact us
                    </a>
                </div>
                <img
                    class="md:max-w-md mb-20 self-center"
                    src="/index/hero.svg" 
                    alt="Gibki Architecture"
                />
            </div>
        </div>
    </section>
    <section class="bg-gb3 flex flex-col w-full min-h-screen">
        <div class="w-full container mx-auto px-10 pt-20 lg:pt-0 flex my-auto justify-between flex-wrap items-center align-center">
            <div class="mb-20 w-full lg:w-1/2 mx-auto lg:mx-0 max-w-xl">
                <h1 class="text-gb5 md:text-5xl text-4xl font-semibold font-poppins">
                    Tailored solutions for modern businesses
                </h1>
                <h3 class="text-gb5 text-2xl font-medium mt-4">
                    Architected from the ground up to suit your needs
                </h3>
            </div>
            <div class="max-w-md flex-shrink mb-20 mx-auto lg:mx-0">
                <img src="/index/technologies-3.svg" alt="Integration Technologies" />
            </div>
        </div>
    </section>
    <section class="bg-gb5 flex flex-col w-full min-h-screen hidden">
        <div class="container mx-auto px-10 flex my-auto">
            <div>
                <h1 class="md:text-5xl text-4xl font-semibold max-w-xl font-poppins">
                    Cost-effective digital transformation
                </h1>
            </div>
        </div>
    </section>
    <Footer />
</main>

<style>
    main {
        color: #242324;
        font-family: 'Poppins'
    }
</style>