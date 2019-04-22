<template>
    <v-content style="">
        <v-layout row wrap class="navbar" style="z-index:10;">
            <v-flex xs4>
                    <img style="margin-top:15px;" height="65px" width="" src="~@/assets/logo.png" />
            </v-flex>
        </v-layout>
        <v-layout row wrap style="margin-top:80px;">
            <v-flex xs2>
            </v-flex>
            <v-flex xs8 >
                <!-- top -->
                <v-layout row wrap style="margin-top:20px;">
                    <v-flex class="body" xs6 style="height:150px;">
                        <v-layout row wrap style="margin-top:10px;">
                            <v-flex xs5>
                                <p style="font-weight:300; margin-left:20px; margin-bottom:0px;  font-size:20px; margin-top:40px;">แลกเปลี่ยนเงินผ่าน</p>
                            </v-flex>
                            <v-flex xs2>
                                <p style="text-align:left; margin-left:0px; margin-top:25px; color:#3acd01; font-weight:500; font-size:35px;">LINE</p>
                            </v-flex>
                            <v-flex xs5>
                                <div style="margin-left:10px; ">
                                    <img @click="linelink()" style="box-shadow: 0 10px 10px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22); border-radius:15px; cursor:pointer;" height="130px" width="130px" src="~@/assets/line.png" />
                                </div>
                            </v-flex>
                            <v-flex xs8 style="margin-top:-60px;">
                                <img @click="linelink()" style="margin-left:20px; border-radius:15px; cursor:pointer;" height="50px" width="" src="~@/assets/add-friend.png" />
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs1></v-flex>
                    <v-flex class="body" xs5 style="">
                        <v-layout row wrap>
                            <v-flex xs3>
                                <p style="margin-top:20px; font-weight:500; font-size:25px; color:#264089; text-align:right;">BEST</p>
                            </v-flex>
                            <v-flex xs4>
                                <p style="margin-top:20px;  color:red; font-size:25px; font-weight:400; text-align:left;">RATE</p>
                            </v-flex>
                            <v-flex xs5>
                                <img style="box-shadow: 0 10px 10px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22); border-radius:15px; cursor:pointer;" height="135px" width="" src="~@/assets/bestrate.png" />
                            </v-flex>
                            <v-flex xs7>
                                    <p style="margin-top:-50px; font-weight:400; font-size:20px; color:gray;">Id: @Bestrateth</p>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <!-- body -->
                <v-layout row wrap style="margin-top:0px;">
                    <v-flex xs2 style="text-align:left;">
                        <p class="underline-fake" style="color:#264089; font-size:25px; margin-top:60px; margin-bottom:0px;">Branch</p>
                    </v-flex>
                    <v-flex xs4 class="body">
                        <v-select v-model="select" :items="items" style="z-index:10; width:90%; margin-left:5%;" ></v-select>
                    </v-flex>
                </v-layout>
                <div class="body">
                    <v-layout row wrap style="background-color:#F0F0F0; border-radius:10px;">
                        <v-flex xs12 style="margin-top:10px;"></v-flex>
                        <v-flex xs3 style="">
                            <p style="margin-left:20%;" class="left header-row-blue underline">Currency</p>
                        </v-flex>
                        <v-flex xs3 style="">
                            <p class="center-head header-row-gray">Denomination</p>
                        </v-flex>
                        <v-flex xs3 style="">
                            <p class="center-head header-row-gray">Buying</p>
                        </v-flex>
                        <v-flex xs3 style="">
                            <p class="center-head header-row-gray">Selling</p>
                        </v-flex>
                        <v-flex xs12 style="margin-top:50px;" v-show="rates.length === 0">
                            <h1 style="font-weight:300; color:gray;">No Currency has been issued here</h1>
                        </v-flex>
                    </v-layout>
                    <div style="margin-left:15px; margin-right:15px;">
                        <!-- body -->
                        <v-layout  row wrap style="" v-for="(x, index) in rates" v-bind:key="index">
                            <v-flex xs12 style="margin-top:10px;">
                                <!-- {{x}} -->
                            </v-flex>
                            <v-flex xs3 style="border-bottom: solid 1px #4B4B4B;">
                                <v-layout row wrap>
                                    <v-flex xs6>
                                        <img align="center" height="26" width="39" style="margin-left:0px;" v-bind:src="'data:image/jpeg;base64,'+ x.currency.flag" />
                                    </v-flex>
                                    <v-flex xs6>
                                        <p style="cursor:pointer; text-align:left; color:gray; font-weight:500; font-size:18px;">{{x.currency.name.length > 5 ? x.currency.name : (x.currency.name.substring(0,5) + '...')}}</p>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs9>
                                <v-layout row wrap v-for="(y, index) in x.denomination" v-bind:key="index" style="border-bottom: solid 1px #4B4B4B;">
                                    <v-flex xs4>
                                        <p class="center-sub" style="margin-top:10px;">{{y.bill}}</p>
                                    </v-flex>
                                    <v-flex xs4 style="">
                                        <p class="center-sub" style="margin-top:10px;">{{y.buy}}</p>
                                    </v-flex>
                                    <v-flex xs4 style="">
                                        <p class="center-sub" style="margin-top:10px;">{{y.sell}}</p>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </v-flex>
            <v-flex xs2></v-flex>
            <v-flex xs12 style="margin-top:100px;"></v-flex>
            <v-flex xs12>
                <p style="color:#2c3e50; font-weight:500;"> © Best Rate Thailand - All rights reserved</p>
            </v-flex>
        </v-layout>
    </v-content>
</template>
<script>
import Api from '@/api/api'
export default {
  methods: {
    linelink () {
      window.open('https://line.me/R/ti/p/MtD6LgSPFR')
    },
    toggleQr () {
      this.qrdialog = !this.qrdialog
    },
    mouseOver (id) {
      let el = document.getElementById(id).style
      el.textDecoration = 'underline black'
      el.cursor = 'pointer'
    },
    mouseLeave (id) {
      let el = document.getElementById(id).style
      el.textDecoration = 'underline white'
    },
  },
  watch: {
    select: function () {
      let payload = {
        _id: this.pairItems.filter(x => x.name === this.select)[0]._id
      }
      Api.getBranch(payload, y => {
        this.select = y.name
        this.rates = y.rates
        if (!this.rates) {
          alert('ss')
        }
      })
    }
  },
  mounted () {
    Api.getbranches(x => {
      this.items = x.map(y => y.name)
      this.pairItems = x
      let payload = {
        _id: x[0]._id
      }
      Api.getBranch(payload, y => {
        this.select = y.name
        this.rates = y.rates
      })
    })
  },
  data () {
    return {
      items: [],
      pairItems: [],
      qrdialog: false,
      tempDenomination: [],
      currencies: [],
      select: '',
      rates: []
    }
  }
}
</script>
<style>
.underline-fake {
    color:#4B4B4B; font-size:30px;
    letter-spacing:1px;
    display: inline-block;
    position:relative;
}
.underline-fake:before{
  content:"";
  width:100%;
  background:linear-gradient(to right, F0F0F0 50%, #8B0000 50%);
}
.underline-fake:after{
  content:"";
  width:100%;
  height:3px;
  left:0;
  bottom:0;
  position:absolute;
  z-index:9;
  background:linear-gradient(to right, #8B0000 60%, #F0F0F0 50%);
}
.underline {
    color:#4B4B4B; font-size:30px;
    letter-spacing:1px;
    display: inline-block;
    position:relative;
}
.underline:before{
  content:"";
  width:100%;
  background:linear-gradient(to right, #F0F0F0 50%, #8B0000 50%);
}
.underline:after{
  content:"";
  width:100%;
  height:3px;
  left:0;
  bottom:0;
  position:absolute;
  z-index:9;
  background:linear-gradient(to right, #8B0000 60%, white 50%);
}
.header-row-blue {
    color: #264089;
    font-weight: 500;
    font-size:20px;
    margin-left:20px;
}
.header-row-gray {
  color:#565656 ;
font-size:20px;
  font-weight:400;
}
.left {
    text-align: left;
    margin-left: 100px;
}
.center-head {
    font-weight: 500;
    text-align: center;
    color: #565656 ;
    font-size: 18px;
}
.center-sub {
    font-weight: 300;
    text-align: center;
    color: #565656 ;
    font-size: 18px;
}
.navbar {
    z-index: 990;
    top: 0px;
    position: fixed;
    width: 100%;
    height:100px;
    background-color:white;
    box-shadow: 0 3px 3px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
}
.body {
    border-radius: 10px;
    margin-top:50px;
    background-color:white;
    box-shadow: 0 3px 3px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
}
.nav li {
  display: inline-block;
  font-size: 20px;
  padding: 20px;
}
</style>
