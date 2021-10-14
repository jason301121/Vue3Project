<template>
    <div class="outSwiperBox">
        <swiper 
        :spaceBetween="20" 
        :slidesPerView="5" 
        :slidesPerGroup="1" 
        :breakpoints="option.breakpoints"
        :autoplay="option.autoplay" 
        :speed="1000" 
        :parallax="true" 
        :loop="true"  
        :navigation="true" 
        class="inSwiperBox mySwiper">
            <template v-for="item in data" :key="item.id">
                <swiper-slide>
                    <div class="card swiper_card border">
                        <div class="card-img-wrap " @click.prevent="goToProduct(`${item.id}`)">
                            <div 
                            class="card-img card-img-top" 
                            style="height:250px" 
                            :style="{ backgroundImage: `url(${item.imageUrl})` }" 
                            :alt="item.title"></div>
                            <div class="card-layer d-flex justify-content-center align-items-center">
                                <p class="card-layer-text d-flex align-items-center">查看詳細</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title fw-bold mb-2">{{ item.title }}</h4>
                            <div class="d-flex justify-content-between">
                                <del class="fs-5 text-muted">NT${{ $filters.currency(item.origin_price) }}</del>
                                <p class="fs-5 text-danger">NT${{ $filters.currency(item.price) }}</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </template>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, {
    Autoplay, Pagination, Parallax,Navigation
} from 'swiper/core';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
SwiperCore.use([Autoplay, Pagination, Parallax,Navigation])

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props:[
        'data'
    ],
    data () {
        return {
            option: {
                autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                },
                pagination: {
                clickable: false
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }
            },
            // thumbsSwiper: null,
        }
    },
    methods: {
        goToProduct(id){
            this.$emit('go-to-product',id);
            // this.$router.push(`/productdetail/${id}`);
        }
    },
}
</script>

<style>
    .outSwiperBox {
    position: relative;
    width: 95%;
    margin: 0 auto;
    }
    
    .inSwiperBox {
    position: initial;
    width: 90%;
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: darkgreen !important;
        font-weight: bold;
    }

    .swiper_card {
        width: 100% !important;
    }
</style>