<template>
    <swiper :spaceBetween="0" :autoplay="option.autoplay" :speed="1000" :parallax="true" :loop="true" class="mySwiper">
        <swiper-slide>
            <div class="banner_background banner_background_Img1">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <p>用心、堅持</p>
                    <span>吃的健康，我來把關</span>
                    <router-link to="/product" class="main_btn banner_background_btn mt-5">馬上逛逛</router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="banner_background banner_background_Img2">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <p>鮮蔬套餐</p>
                    <span>不必出門就能享受最新鮮的食材</span>
                    <router-link to="/product" class="main_btn banner_background_btn mt-5">立即購買</router-link>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, {
    Autoplay, Pagination, Parallax
} from 'swiper/core'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.min.css'
SwiperCore.use([Autoplay, Pagination, Parallax])

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data () {
        return {
        option: {
            autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            },
            pagination: {
            clickable: false
            }
        }
        }
    }
    }
</script>