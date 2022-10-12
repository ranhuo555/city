<template>
    <div class="screen">
        <div class="title">
            <img src="../assets/bg/title.png" alt="">
            城市智慧系统demo
        </div>
        <div class="content">
            <div class="left">
                <div class="item" v-for="item in infoList" :key="item.id">
                    <img src="../assets/bg/border_bg01.png" alt="">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="content">
                        <div class="imgBox">
                            <img src="../assets/bg/bar.svg" alt="" class="img">
                        </div>
                        <div class="num">
                            {{item.num.toFixed()}} ({{item.unit}})
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div :class="item.chooseFlag ? 'item warn' : 'item'" v-for="(item,idx) in eventList" :key="idx" @click="showEvent(idx)">
                    <img src="../assets/bg/border_bg01.png" alt="">
                    <div class="event">
                        <div class="main">
                            <div>
                                <img :src="item.imgUrl" alt="" class="eventImg" />
                            </div>
                            <div class="name">{{item.zhName}}</div>
                        </div>
                        <div class="time">
                            {{item.time}}
                        </div>
                    </div>
                    <div class="eventTitle">
                        重大事故,需派人支援
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        infoList:Array,
        eventList:Array,
        showEvent:Function
    },
    data() {
        return {
          
        }
    },


    created() {
       
    }
}
</script>

<style lang="scss">
img {
    position: absolute;
    left: 0;
    top: 0;
}

.screen {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;

    .title {
        width: 100%;
        height: 7%;
        position: relative;
        text-align: center;
        font-size: 30px;
        color: #FFFFFF;
        line-height: 80px;


    }

    .content {
        width: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: space-between;

        .left,
        .right {
            width: 15%;
            height: 100%;
            background-image: url("../assets/bg/line_img.png");
            background-repeat: no-repeat;
            background-size: contain;

            .item {
                width: 80%;
                height: 15%;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-bottom: 30px;
                position: relative;

                .title {
                    width: fit-content;
                    height: 50px;
                    color: #FFFFFF;
                    text-align: left;
                    font-size: 20px;
                    padding-left: 20px;
                }

                .content {
                    width: 100%;
                    flex-grow: 1;
                    padding-left: 20px;
                    padding-right: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-sizing: border-box;

                    .imgBox {
                        height: 100%;
                        width: 30%;
                        position: relative;
                    }

                    .num {
                        text-align: right;
                        height: 100%;
                        color: #FFFFFF;
                        font-size: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: right;
                    }
                }

                .event {
                    width: 100%;
                    height: 30%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 20px 5px;
                    .eventImg {
                       width: 50%;
                       height: 100%;
                    }

                    .main {
                        display: flex;
                        align-items: center;
                        position: relative;
                        .name {
                            height: fit-content;
                            color: #FFFFFF;
                            font-weight: 900;
                        }
                    }
                    .time {
                            height: fit-content;
                            color: #FFFFFF;
                            font-weight: 900;
                            text-align: right;
                            margin-right: 20px;
                        }
                }

                .eventTitle {
                    color: #FFFFFF;
                    margin:10px 30px;
                    font-size: 18px;
                    font-weight: 900;
                }
            }


            .item.warn {
                 background-color: rgba(256,0,0,0.5);
            }
        }

        .left {
            background-position: 100% center;

        }


        .right {
            background-position: left center;
            .item{
                pointer-events: all;
            }
        }


    }
}
</style>