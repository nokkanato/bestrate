<template>
    <v-content style="">
        <v-layout row wrap class="navbar-xs" style="z-index:999;">
            <v-flex xs4>
                    <img style="margin-top:15px; margin-left:10px;" height="65px" width="" src="~@/assets/logo.png" />
            </v-flex>
        </v-layout>
        <v-layout row wrap style="margin-top:50px; margin-left:10px; margin-right:10px;">
            <v-flex xs12 >
                <!-- top -->
                <v-layout row wrap style="margin-top:10px;">
                    <v-flex class="body" xs12 style="height:100px;">
                        <v-layout row wrap style="margin-top:10px;">
                            <v-flex xs5>
                                <p style="font-weight:300; margin-left:5px; font-size:16px; margin-top:5px;">แลกเปลี่ยนเงินผ่าน</p>
                            </v-flex>
                            <v-flex xs2>
                                <p style="text-align:left; margin-left:0px; margin-top:1px; color:#3acd01; font-weight:500; font-size:20px;">LINE</p>
                            </v-flex>
                            <v-flex xs5>
                                <div style="margin-left:10px; ">
                                    <img @click="toggleQr()" style="box-shadow: 0 10px 10px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22); border-radius:15px; cursor:pointer;" height="80px" width="80px" src="~@/assets/line.png" />
                                </div>
                            </v-flex>
                            <v-flex xs8 style="margin-top:-60px;">
                                <img @click="linelink()" style="margin-left:20px; border-radius:15px; cursor:pointer;" height="50px" width="" src="~@/assets/add-friend.png" />
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex class="body" xs12 style="height:100px;">
                        <v-layout row wrap>
                            <v-flex xs3>
                                <p style="margin-top:20px; font-weight:500; font-size:20px; color:#264089; text-align:right;">BEST</p>
                            </v-flex>
                            <v-flex xs3>
                                <p style="margin-top:20px;  color:red; font-size:20px; font-weight:400; text-align:left;">RATE</p>
                            </v-flex>
                            <v-flex xs6>
                                <img style="box-shadow: 0 10px 10px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22); border-radius:15px; cursor:pointer; margin-left:50px; " height="90px" width="" src="~@/assets/bestrate.png" />
                            </v-flex>
                            <v-flex xs7>
                                    <p style="margin-top:-30px; font-weight:400; font-size:16px; color:gray;">Id: @Bestrateth</p>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <!-- body -->
                <v-layout row wrap style="margin-top:10px;">
                    <v-flex xs1></v-flex>
                    <v-flex xs5 style="text-align:left;">
                        <p class="underline-fake" style="color:#264089; margin-top:60px; font-size:20px; margin-bottom:0px;">Branch</p>
                    </v-flex>
                    <v-flex xs6 class="body">
                        <v-select v-model="select" :items="items" style="z-index:10; width:90%; margin-left:5%;" ></v-select>
                    </v-flex>
                </v-layout>
                <div class="body">
                    <v-layout row wrap style="background-color:#F0F0F0;">
                        <v-flex xs12 style="margin-top:20px;"></v-flex>
                        <v-flex xs6 style="">
                            <p class="header-row-blue underline">Currency</p>
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
                    <!-- body -->
                    <v-layout row wrap style="" v-for="(x, index) in rates" v-bind:key="index">
                        <v-flex xs12 style="margin-top:10px;"></v-flex>
                        <v-flex xs2 style="height:50px;">
                            <img height="26" width="39" style="margin-left:30px;" v-bind:src="'data:image/jpeg;base64,'+ x.currency.flag" />
                        </v-flex>
                        <v-flex xs4 style="height:50px;">
                            <p @mouseleave="mouseLeave(index)" @mouseover="mouseOver(index)" :id="index" @click="toggle(x)" style=" text-align:center; margin-right:25px;  color:gray; font-weight:500; font-size:18px;">{{x.currency.name.substring(0,10)}}</p>
                        </v-flex>
                        <v-flex xs3 style="height:50px;">
                            <p class="center-sub">{{x.denomination[0].buy}}</p>
                        </v-flex>
                        <v-flex xs3 style="height:50px;">
                            <p class="center-sub">{{x.denomination[0].sell}}</p>
                        </v-flex>
                    </v-layout>
                    <!-- <v-dialog  width="500px" style="z-index:999; border-radius: 10px;" v-model="qrdialog">
                            <v-layout row wrap style="background-color:white;">
                                <v-flex xs2 >
                                    <img height="150px" width="300px" style="margin-left:40px; margin-top:20px;" src="~@/assets/bestrate.png"/>
                                </v-flex>
                            </v-layout>
                    </v-dialog> -->
                   <v-dialog v-if="dialog === true" width="500px" style="z-index:999; border-radius: 10px;" v-model="dialog">
                        <div style="background-color:white; border-radius:20px;">
                            <v-layout row wrap>
                                <v-flex xs2 >
                                    <img height="26" width="39" style="margin-left:50px; margin-top:20px;" v-bind:src="'data:image/jpeg;base64,'+ tempDenomination.currency.flag" />
                                </v-flex>
                                <v-flex xs10>
                                    <p style="margin-top:25px; font-weight:500; color:#4B4B4B;  margin-left:10px; text-align:left;">{{tempDenomination.currency.name.substring(0,30)}}</p>
                                </v-flex>
                                <v-flex xs1></v-flex>
                                <v-flex xs10>
                                    <v-divider></v-divider>
                                </v-flex>
                                <v-flex xs1></v-flex>
                                <v-flex xs12 style="margin-top:20px;"></v-flex>
                                <v-flex xs4 style="">
                                    <p style="color:#4B4B4B;" class="center-dialog">Denomination</p>
                                </v-flex>
                                <v-flex xs4 style="">
                                    <p style="color:#264089;" class="center-dialog">Buying</p>
                                </v-flex>
                                <v-flex xs4 style="">
                                    <p style="color:red; " class="center-dialog">Selling</p>
                                </v-flex>
                                <v-flex xs4 style="">
                                    <p style="color:#4B4B4B; text-decoration:underline;" class="center-dialog">USD</p>
                                </v-flex>
                                <v-flex xs4 style="">
                                    <p style="color:#264089; text-decoration:underline;" class="center-dialog">THB</p>
                                </v-flex>
                                <v-flex xs4 style="">
                                    <p style="color:red; text-decoration:underline;" class="center-dialog">THB</p>
                                </v-flex>
                            </v-layout>
                            <v-layout  style="background-color:white;" row wrap v-for="(x, index) in tempDenomination.denomination" v-bind:key="index">
                                <v-flex xs4 style="">
                                    <p style="color:#7D7D7D; font-weight:400;" class="center-dialog" >{{x.bill}}</p>
                                </v-flex>
                                <v-flex xs4 style="">
                                    <p style="color:#7D7D7D; font-weight:400;" class="center-dialog">{{x.buy}}</p>
                                </v-flex>
                                <v-flex xs4 style="">
                                    <p style="color:#7D7D7D; font-weight:400;" class="center-dialog">{{x.sell}}</p>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-dialog>
                </div>
            </v-flex>
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
  methods: {
    linelink () {
      window.open('https://line.me/R/ti/p/MtD6LgSPFR')
    },
    toggleQr () {
      this.qrdialog = !this.qrdialog
    },
    mouseOver (id) {
      let el = document.getElementById(id).style
      el.textDecoration = 'underline'
      el.cursor = 'pointer'
    },
    mouseLeave (id) {
      let el = document.getElementById(id).style
      el.textDecoration = 'underline white'
    },
    toggle (e) {
      this.tempDenomination = e
      console.log(this.tempDenomination.denomination, 'fff')
      this.dialog = !this.dialog
    }
  },
  mounted () {
    Api.getbranches(x => {
      this.items = x.map(y => y.name)
      this.pairItems = x
      let payload = {
        _id: x[0]._id
      }
      console.log(x, 's', payload)
      Api.getBranch(payload, y => {
        this.select = y.name
        console.log(y.rates, ' y')
        this.rates = y.rates
      })
    })
  },
  data () {
    return {
      select: '',
      items: [],
      pairItems: [],
      qrdialog: false,
      dialog: false,
      tempDenomination: [],
      currencies: [],
      rates: []
    }
  }
}
</script>
<style>
.underline {
    color:#4B4B4B; font-size:30px;
    letter-spacing:1px;
    display: inline-block;
    position:relative;
}
.underline:before{
  content:"";
  width:100%;
  background:linear-gradient(to right, white 50%, #8B0000 50%);
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
    font-size:18px;
    margin-left:10px;
}
.header-row-gray {
  color:#565656 ;
font-size:20px;
  font-weight:400;
}
.left-dialog {
    text-align: left;
    margin-left: 100px;
}
.center-dialog {
    text-align: center;
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
.navbar-xs {
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
.nav {
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

.nav li {
  display: inline-block;
  font-size: 20px;
  padding: 20px;
}
</style>
