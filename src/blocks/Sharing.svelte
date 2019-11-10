<script>
  export let headline, text, logo, picture, layout;

  import * as sapper from '@sapper/app';
  import html2canvas from 'html2canvas';
  import fileSaver from 'file-saver';
  import uuid from 'uuid/v1';
  import { storage } from '../vendor/firebase';

  // SAVE

  // let html2canvas;
  let logoB64;
  let pictureB64;
  // console.log('Sharing');
  // logoB64 = await urlToB64Async($logo);
  // pictureB64 = await urlToB64Async($picture);

  let sample;
  const onDownloadClick = () => {
    window.scrollTo(0, 0); // https://git.io/Je28P

    html2canvas(sample, {
      scale: 1,
    }).then(canvas => {
      canvas.toBlob(blob => {
        fileSaver.saveAs(blob, 'screenshot.png');
      });
    });
  };
  const onShareClick = async () => {
    const id = uuid();

    const data = {
      headline: $headline,
      text: $text,
      logo: logoB64,
      picture: pictureB64,
    };

    window.scrollTo(0, 0);

    const canvas = await html2canvas(sample, {
      scale: 1,
    });
    const result = await new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        const imgPath = `test/${id}.png`;
        const storageRef = storage.ref(imgPath);
        const task = storageRef.put(blob);

        task.on(
          'state_changed',
          snapshot => {
            console.log(snapshot);
          },
          reject,
          resolve,
        );
      });
    });

    console.log(result);
  };

  // sapper.goto(`/look-${id}`);

  // return new Promise((resolve, reject) => {
  //   const jsonPath = `test/${id}.json`;
  //   const storageRef = firebase.storage().ref(jsonPath);
  //   const blob = new Blob([JSON.stringify(data, null, 4)], {
  //     type: 'application/json'
  //   });
  //   const task = storageRef.put(blob);

  //   task.on(
  //     'state_changed',
  //     snapshot => {
  //       console.log(snapshot);
  //     },
  //     reject,
  //     resolve
  //   );
  // });
</script>

<style>
  @import '../fonts/navigo.css';

  .container {
    font-family: Navigo;
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-around;
  }

  .item {
    font-size: 75px;
    font-weight: bold;
    line-height: 100px;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s;
  }

  .item:hover {
    transform: scale(1.05);
  }

  .item:active {
    transform: scale(1);
  }
</style>

<div class="container">
  <div class="item">fb</div>
  <div class="item">inst</div>
  <div class="item">tw</div>
  <div class="item">vk</div>
  <div class="item">file</div>
  <!-- <div class="sharing__item">copy</div> -->
</div>

<!-- <div
      class="section__main-cell section__main-cell_for_download"
      on:click={onDownloadClick}>
      Download
    </div> -->
