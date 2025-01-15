<template>
  <Header/>
  <section class="bg-footer-of-footer py-20 w-full pt-86 px-4 lg:px-36">
    <div class="text-xl sm:text-gray-600-4xl lg:text-6xl text-black text-center">
      <p>Let's Connect</p>
    </div>
    <div
        class="w-full lg:w-2/3 mx-auto flex sm:flex-col md:flex-row md:items-baseline lg:flex-row text-center items-center justify-center sm:space-y-5 lg:space-y-0 lg:space-x-5">
      <div class="flex flex-col sm:text-xl md:text-base lg:text-xl items-center p-0 md:p-6 lg:p-6">
        <UsInfoBlock
            title=""
            :datas="[
            'I`m a paragraph. Click here to add your own text and edit me.',
            'Let your users get to know you.',
          ]"
        />
      </div>
    </div>
  </section>
  <section class="w-full min-h-96 flex justify-center flex-col md:flex-row lg:flex-row pt-12">
    <div class="w-5/6 flex flex-col md:flex-row lg:flex-row">
      <div class="w-full md:w-1/2 lg:w-1/2 p-4">
        <div class="w-full h-full pt-24 pb-24 ps-12 md:ps-0 lg:ps-12 pe-0 md:pe-0 lg:pe-24">
          <div class="w-full mb-8 flex flex-col md:flex-row lg:flex-row">
            <div class="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0 lg:mb-0 me-4">
              <InfoInput title="First Name *" type="text"/>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2">
              <InfoInput title="Last Name *" type="text"/>
            </div>
          </div>
          <div class="w-full mb-8">
            <InfoInput title="Email *" type="email"/>
          </div>
          <div class="w-full flex flex-col">
            <div class="w-full me-3">
              <label class="text-sm font-medium text-gray-900">Message *</label>
              <textarea class="w-full h-36 mt-3 block border border-black resize-none"></textarea>
            </div>
          </div>
          <div class="w-full mt-4 flex justify-end">
            <button
                class="w-full bg-xaki-kanach text-white py-3 px-10 border border-xaki-kanach hover:text-black hover:bg-transparent transition-all duration-300">
              Send
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2 p-4 flex items-center">
        <div class="w-full h-2/3 pb-28 md:ps-12 ps-12 lg:ps-28 pe-0 md:pe-4 lg:pe-12 border-s-0 md:border-s lg:border-s border-black">
          <div class="w-full mb-8 md:mb-12 lg:mb-16 flex flex-col md:flex-row lg:flex-row">
            <div class="w-full md:w-1/2 lg:w-1/2 me-12 pb-8 md:pb-0 lg:pb-0">
              <svg preserveAspectRatio="xMidYMid meet" data-bbox="53.5 36.5 93 127" viewBox="53.5 36.5 93 127"
                   height="29" width="21" color="black" xmlns="http://www.w3.org/2000/svg" data-type="color"
                   role="presentation" aria-hidden="true" aria-label="">
                <path
                    d="M99.999 163.5l-3.25-3.895C94.986 157.487 53.5 107.468 53.5 82.916 53.5 57.323 74.359 36.5 99.999 36.5c25.644 0 46.501 20.823 46.501 46.416 0 24.551-41.483 74.571-43.252 76.688l-3.249 3.896zm0-118.56c-20.978 0-38.046 17.036-38.046 37.977 0 16.359 25.019 51.015 38.046 67.305 13.029-16.29 38.048-50.946 38.048-67.305 0-20.942-17.068-37.977-38.048-37.977z"
                    fill="#000000"></path>
                <path
                    d="M99.999 101.658c-10.351 0-18.775-8.407-18.775-18.741 0-10.335 8.424-18.743 18.775-18.743 10.353 0 18.777 8.408 18.777 18.743 0 10.333-8.424 18.741-18.777 18.741zm0-29.046c-5.69 0-10.32 4.621-10.32 10.304 0 5.68 4.63 10.303 10.32 10.303 5.692 0 10.324-4.622 10.324-10.303 0-5.682-4.632-10.304-10.324-10.304z"
                    fill="#000000"></path>
              </svg>
              <div class="text-xl mt-5 text-black text-start">
                <p>Address</p>
              </div>
              <div
                  class="w-full lg:w-full mx-auto flex sm:flex-col md:flex-row md:items-baseline lg:flex-row items-center">
                <div class="flex flex-col text-base md:text-sm lg:text-base">
                  <UsInfoBlock
                      :datas="[
                      '500 Terry Francine St.',
                      'San Francisco, CA 94158',
                    ]"
                  />
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2 pb-4 md:pb-0 lg:pb-0">
              <svg preserveAspectRatio="xMidYMid meet" data-bbox="38.999 39 122.001 122" viewBox="38.999 39 122.001 122"
                   height="23" width="23" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true"
                   aria-label="">
                <path
                    d="M66.248 47.383c2.234 0 4.783.813 6.746 3.742 5.289 7.88 10.39 15.304 13.215 20.359.956 1.715 1.884 6.569-1.238 10.083-2.696 3.029-5.074 3.772-6.511 5.984-.985 1.524-2.11 4.931-.259 8.848 2.213 4.678 4.913 8.52 10.838 14.54 6.018 5.917 9.859 8.615 14.546 10.829 1.53.722 2.984.99 4.276.99 2.019 0 3.647-.651 4.573-1.249 2.213-1.434 2.958-3.812 5.989-6.507 1.827-1.621 4.014-2.15 5.935-2.15 1.779 0 3.33.454 4.152.916 5.057 2.82 12.484 7.919 20.372 13.203 5.532 3.707 3.515 9.499 2.736 11.32-.783 1.821-4.788 7.847-13.4 12.352-2.37 1.239-5.497 1.974-9.288 1.974-11.935 0-30.424-7.304-52.356-29.225-28.895-28.88-32.402-51.787-27.261-61.607 4.506-8.61 10.536-12.613 12.36-13.392.854-.368 2.589-1.01 4.575-1.01zm0-8.383c-3.278 0-6.106.923-7.9 1.699C54.8 42.211 47.294 47.555 41.88 57.9c-6.765 12.922-3.295 39.381 28.762 71.419C98.22 156.883 118.998 161 128.929 161c5.024 0 9.457-.987 13.175-2.93 10.331-5.404 15.687-12.899 17.222-16.475 3.579-8.37 1.312-16.839-5.772-21.589-1.216-.813-2.421-1.623-3.606-2.42-6.566-4.414-12.769-8.585-17.35-11.141-2.239-1.252-5.244-1.975-8.238-1.977-4.382 0-8.36 1.473-11.504 4.264-2.088 1.855-3.389 3.574-4.34 4.827-.196.259-.44.582-.628.813h-.027c-.197 0-.43-.062-.694-.187-3.482-1.644-6.597-3.675-12.199-9.178-5.508-5.6-7.54-8.714-9.185-12.193-.152-.321-.191-.558-.189-.718.231-.188.557-.433.817-.63 1.255-.95 2.973-2.249 4.826-4.33 5.306-5.974 5.143-14.623 2.3-19.731-2.579-4.614-6.782-10.857-11.234-17.465-.772-1.148-1.557-2.312-2.346-3.487C76.736 41.648 71.866 39 66.248 39z"
                    fill="#000000"></path>
              </svg>
              <div class="text-xl mt-6 text-black text-start">
                <p>Phone</p>
              </div>
              <div
                  class="w-full lg:w-full mx-auto flex sm:flex-col md:flex-row md:items-baseline lg:flex-row">
                <div class="flex flex-col sm:text-base md:text-sm lg:text-base">
                  <UsInfoBlock
                      :datas="[
                      '123-456-7890'
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col md:flex-row lg:flex-row">
            <div class="w-full me-12 md:w-1/2 lg:w-1/2 pb-8 md:pb-0 lg:pb-0">
              <svg preserveAspectRatio="xMidYMid meet" viewBox="35 56 130 88" height="16" width="23"
                   xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true" aria-label="">
                <path
                    d="M35 56v88h130V56H35zm64.879 58.87L49.15 64.499h101.455L99.879 114.87zM72.191 99.311l-28.755 30.025V70.757l28.755 28.554zm6.009 5.967l21.679 21.525 21.677-21.525 28.93 30.224H49.254L78.2 105.278zm49.364-5.967l29-28.796v59.092l-29-30.296z"
                    class="fill-primary"></path>
              </svg>
              <div class="text-xl mt-8 text-black text-start">
                <p>Email</p>
              </div>
              <div class="w-full lg:w-full mx-auto mt-1 flex sm:flex-col md:flex-row md:items-baseline lg:flex-row ">
                <div class="flex flex-col cursor-pointer sm:text-base md:text-sm lg:text-base">
                  <UsInfoBlock
                      :datas="[
                      'info@mysite.com'
                    ]"
                  />
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2 pb-4 md:pb-0 lg:pb-0">
              <svg class="ms-1" preserveAspectRatio="xMidYMid meet" viewBox="42 39.499 116 121" height="24" width="23"
                   xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true">
                <path
                    d="M153.456 94.317c-3.926-5.122-9.922-7.943-16.878-7.943h-12.117c4.984-10.908 5.154-26.807 1.188-36.237-2.887-6.862-7.829-10.638-13.919-10.638-1.652 0-3.381.29-5.14.855-8.689 2.802-9.015 9.724-9.303 15.83-.42 8.874-1.056 21.923-23.628 38.773v-8.465H42v72.826h31.66v-9.008c5.418 4.908 13.13 10.189 21.245 10.189h36.611c7.637 0 15.169-5.777 17.152-13.15l8.222-30.59c2.272-8.452 1.021-16.634-3.434-22.442zm-88.219 56.579H50.423V94.92h14.814v55.976zm83.517-36.324l-8.222 30.592c-.989 3.685-5.201 6.911-9.015 6.911H94.905c-7.958 0-17.306-9.198-21.245-13.896v-32.876c30.727-20.874 31.546-38.253 32.042-48.721.304-6.46.663-7.302 3.472-8.211.922-.297 1.784-.447 2.557-.447 2.555 0 4.622 1.844 6.152 5.48 4.2 9.986 2.012 27.905-4.183 34.236l-7.003 7.157h29.88c4.339 0 7.865 1.605 10.192 4.644 2.849 3.716 3.572 9.227 1.985 15.131z"
                    class="fill-primary"></path>
              </svg>
              <div class="text-xl ms-1 mt-5 text-black text-start">
                <p>Follow</p>
              </div>
              <div
                  class="w-full lg:w-full mx-auto flex flex-row md:items-baseline items-center mt-5">
                <div class="w-6 h-6 me-2">
                  <a href="https://www.facebook.com/wix">
                    <ImageBlock width="25"
                                height="25"
                                src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"/>
                  </a>
                </div>
                <div class="w-6 h-6 me-2">
                  <a href="https://www.twitter.com/wix">
                    <ImageBlock width="25"
                                height="25"
                                src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c7d035ba85f6486680c2facedecdcf4d.png"/>
                  </a>
                </div>
                <div class="w-6 h-6">
                  <a href="https://www.instagram.com/wix">
                    <ImageBlock width="25"
                                height="25"
                                src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"/>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.419976389337!2d44.49902878454366!3d40.22196349791306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a970002cae971%3A0x7c3be6443d627fcc!2sCODEIDEA%20LLC!5e0!3m2!1sru!2sam!4v1734960023074!5m2!1sru!2sam"
      class="w-full h-96 mt-12" style="border:0; pointer-events: none;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import UsInfoBlock from "@/components/ThisIsUsInfoDir/UsInfoBlock.vue";
import Footer from "@/components/Footer.vue";
import InfoInput from "@/components/ContactInfoDir/InfoInput.vue";
import ImageBlock from "@/components/imageText/ImageBlock.vue";
import {onMounted, onBeforeMount} from "vue";

onBeforeMount(() => {
  window.scrollTo({
    top: 1800,
    behavior: "auto",
  });
});

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>

<style scoped>

</style>