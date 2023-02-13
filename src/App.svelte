<script lang="ts">
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import ArticleList from "./components/ArticleList.svelte";
  import Cv from "./components/Cv.svelte";
  import SeparatorHeading from "./components/SeparatorHeading.svelte";
  import Background from "./components/Background.svelte";
  import Footer from "./components/Footer.svelte";
  import SkillList from "./components/SkillList.svelte";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>
<main>
  <Background />
  <Header />
  <div class="flex flex-col gap-10">
    <Hero />

    <SeparatorHeading label="Articles" />
    <ArticleList />
    <SeparatorHeading label="CV" />
    <Cv />
    <SeparatorHeading label="Skills" />
    <SkillList />
  </div>
  <div class="h-20" />
  <Footer />
</main>
