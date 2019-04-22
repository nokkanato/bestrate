import Vue from 'vue'
export default {
  // get all branches
  getbranches (callback) {
    Vue.$http.get('getbranches').then(function (response) {
      console.log('getbranch', response)
      callback(response.data)
    }).catch(function (response) {
      callback(response)
    })
  },
  // get branch detail {_id}
  // remove branch {_id}
  getBranch (params, callback) {
    console.log('spi', {params})
    Vue.$http.get('getbranch', {params}).then(function (response) {
      console.log('get branch', response)
      callback(response.data)
    }).catch(function (response) {
      callback(response)
    })
  }
}
