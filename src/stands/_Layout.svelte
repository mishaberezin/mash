<script>
  import navigo from "../fonts/navigo.css";
  import { headline, text, logo, picture } from "../store.js";

  import fragment from "svelte-fragment";
  import layouts from "../../lib/layouts.js";
  import { getPermutations } from "../../lib/utils.js";

  import Sample from "../blocks/Sample.svelte";
  import Ruler from "../blocks/Ruler.svelte";
  import Logo from "../blocks/Logo.svelte";
  import Image from "../blocks/Image.svelte";
  import Unzoom from "../blocks/Unzoom.svelte";

  const arrange = areas => {
    const keys = ["logo", "text", "image"];
    const permutations = getPermutations(areas);

    return permutations.map(([logo, text, image]) => ({
      logo: logo.join("/"),
      text: text.join("/"),
      image: image.join("/")
    }));
  };

  const arrangements = layouts.map((areas, i) => {
    return {
      name: `Layout #${i}`,
      permutations: arrange(areas)
    };
  });
</script>

<style>
  .section {
    --right-col-width: 33.5vh;

    min-height: 100%;
    font-family: Navigo;
    background: #000;
    padding-top: 30px;
  }

  .stand__viewer {
    display: grid;
    grid-template: 270px / repeat(2, 550px);
    grid-auto-columns: 1fr;
    grid-auto-rows: 300px;
    margin: 0 auto;
    width: 1100px;
  }
</style>

<section class="section section_name_layout">
  <div class="stand">
    <div class="stand__viewer">
      {#each arrangements as arrangement, i}
        <Unzoom>
          <Ruler>
            <Sample model={true} arrangement={arrangement.permutations[0]}>
              <span slot="logo" />
              <span slot="text" />
              <span slot="image" />
            </Sample>
          </Ruler>
        </Unzoom>
        <div style="color: #fff;">🛸 {i}</div>
      {/each}
    </div>
  </div>
</section>
