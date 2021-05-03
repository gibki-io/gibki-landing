<script>
    import Header from '$lib/Header/index.svelte';
</script>

<head>
    <title>Gibki Labs - Digital Transformation Agency</title>
    <link rel="icon" type="image/ico" href="/favicon.ico" />
</head>

<main class="flex flex-col w-full">
    <section class="bg-gb1 flex flex-col w-full h-screen">
        <Header />
        <div class="container mx-auto px-10 mt-32">
            <h1 class="text-6xl font-semibold max-w-xl font-poppins">
                Realign. Reinvent. Reimagine.
            </h1>
            <h3 class="text-2xl font-medium mt-4 mb-14">
                Digital transformation solutions for small businesses.
            </h3>
            <a class="px-5 py-3 bg-gb3 text-gb-white text-xl rounded-md font-medium shadow-lg" href="mailto:hello@gibki.io">
                contact us
            </a>
        </div>
        <img
            class="lg:w-1/2 w-full absolute bottom-0 right-0"
            src="/index/hero.svg" 
            alt="Gibki Architecture"
        />
    </section>
    <section class="bg-gb3 flex-col w-full h-64">
        <div class="container mx-auto px-10">
        </div>
    </section>
    <!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v10.0'
          });
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      </script>

      <!-- Your Chat Plugin code -->
      <div class="fb-customerchat"
        attribution="page_inbox"
        page_id="101193482142997">
      </div>
</main>

<style>
    main {
        color: #242324;
        font-family: 'Poppins'
    }
    
    .text-gb-white {
        color: #F3F3F8;
    }
    .text-gb-black {
        color: #242324;
    }
    .text-gb-accent1 {
        color: #0AE6B0;
    }
</style>