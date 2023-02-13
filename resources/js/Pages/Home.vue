<template>
    <Head>
        <title>Mobile Tyre Fitting | 30-60 Minute Response | ProntoTyres</title>
        <meta name="description" content="ProntoTyres offers same day, 7 days a week emergency mobile tyre fitting service in and around Wolverhampton.">
        <link rel="canonical" href="https://prontotyres.co.uk/">
    </Head>


    <MainCarousel>
        <template v-slot:img_1>
            <img
                src="/images/carousel/1.webp"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre fitting"
            >
        </template>
        <template v-slot:img_2>
            <img
                src="/images/carousel/2.jpg"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre repair"
            >
        </template>
        <template v-slot:img_3>
            <img
                src="/images/carousel/3.jpg"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre repair"
            >
        </template>
        <template v-slot:img_4>
            <img
                src="/images/carousel/4.jpg"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre repair"
            >
        </template>
        <template v-slot:img_5>
            <img
                src="/images/carousel/5.jpg"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre repair"
            >
        </template>
    </MainCarousel>

    <OurServices/>

    <Container class="pt-8">
        <div class="flex lg:flex-row flex-col-reverse lg:space-y-0 items-start justify-between">
            <div class="lg:w-1/2 w-full lg:mt-0 mt-10 flex items-center lg:justify-start justify-center">
                <div class="">
                    <p class="xl:text-3xl sm:text-2xl text-xl font-semibold font-montserrat">Why choose mobile tyre fitting?</p>

                    <ul class="xl:pl-4 pl-0 mt-10 space-y-4">
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="xl:text-xl sm:text-lg text-base">Cost-effective solution for your tyre needs</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="xl:text-xl sm:text-lg text-base">Quick response, so you don't wait for breakdown services</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="xl:text-xl sm:text-lg text-base">Keeps you and your car safe</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="xl:text-xl sm:text-lg text-base">Fitted at your convenience, you choose the time & place.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <AreasWeCover class="lg:w-1/2 w-full"/>
        </div>
    </Container>

    <Container class="pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" id="about">
        <div class="sm:px-0 px-4">

            <h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase">Welcome to <span class="text-site-700">ProntoTyres</span></h1>
            <h2 class="md:text-xl sm:text-lg text-base mb-10">We bring the garage to your car, so you don't have to.</h2>
            <p class="text-sm">
                No one knows when they may experience a flat tyre. It could happen at anytime or anyplace, and nothing is more frustrating than having your valuable free time wasted.
                That's why at <b>ProntoTyres</b>, we can come to your rescue with our mobile tyre fitting and repair services. We have many professional tyre fitters on standby, ready
                to drive to your location within 30-60 minutes and have your new tyre fitted.
            </p>
            <br>
            <p class="text-sm">
                Whether you're at home, work or on the roadside, you're guaranteed to receive exceptional mobile tyre fitting service when you choose <b>ProntoTyres</b>
            </p>
            <br>

            <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                <div class="md:hidden block">
                    <img src="/images/24-hour-assistance.jpg" alt="">
                </div>

                <div class="col-span-7">
                    <h2 class="lg:text-3xl text-2xl font-semibold">24 Hour Assistance</h2>
                    <br>
                    <p class="text-sm">
                        At <b>ProntoTyres</b>, we pride ourselves on providing fast and efficient service to our customers.
                        Our quick response rate ensures that you will not have to wait long for assistance, regardless of where you are.
                        We will respond as soon as possible if you have a flat tyre, a puncture, or any other tyre-related problem.
                    </p>
                    <br>
                    <p class="text-sm">
                        Furthermore, we understand that tyre issues can occur at any time, which is why we provide 24-hour emergency services.
                        We will be there to assist you whether it is the middle of the night or the weekend.
                        You can have peace of mind knowing that you can get back on the road quickly with <b>ProntoTyres</b>, no matter what the situation is.
                    </p>
                    <br>
                    <p class="text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07837993169">07837 993169</a> for a prompt service</span>
                    </p>
                </div>
                <div class="md:block hidden col-span-5">
                    <img src="/images/24-hour-assistance.jpg" alt="">
                </div>

                <div class="col-span-5">
                    <img src="/images/high-quality-tyres.jpg" alt="">
                </div>
                <div class="col-span-7">
                    <h2 class="lg:text-3xl text-2xl font-semibold">Ultimate Performance Tyres</h2>
                    <br>
                    <p class="text-sm">
                        At <b>ProntoTyres</b>, we are committed to providing our customers with the highest quality tyres from the leading brands in the industry.
                        Whether you need performance tyres for your sports car or reliable and long-lasting tyres for your family vehicle, we have you covered.
                        We only stock tyres from reputable brands like Michelin, Goodyear, Continental, and many others, ensuring that you get the best product for your vehicle.
                    </p>
                    <br>
                    <p class="text-sm">
                        Our tyre experts are knowledgeable and experienced, and they will work with you to find the best tyre for your needs and driving style.
                        With <b>ProntoTyres</b>, you can be confident that you are receiving the highest quality tyres available, backed by our commitment to customer satisfaction.
                    </p>
                    <br>
                    <p class="text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07837993169">07837 993169</a> for a prompt service</span>
                    </p>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
import MainCarousel from "../Components/MainCarousel.vue"
import OurServices from "../Components/OurServices.vue"
import AreasWeCover from "../Components/AreasWeCover.vue"
import Container from "../Components/Container.vue"
</script>
