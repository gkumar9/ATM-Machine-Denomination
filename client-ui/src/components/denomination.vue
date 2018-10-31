<template>
  <div class="main">
  <el-form>
    <el-form-item  label="Available Balance:">
    <el-input v-model="data.Accbalance" disabled></el-input>
  </el-form-item>
  <el-form-item  label="Last Transaction">
  <span>{{data.trans[data.trans.length-1]}}</span>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="Denomination" label="Denomination" >
      </el-table-column>
      <el-table-column prop="number" label="number" >
      </el-table-column>
    </el-table>
  </el-form-item> 
  
  <el-form-item>
  <el-button type="primary" @click="home()">HOME</el-button>
  </el-form-item>
  </el-form>
  </div>
</template>

<script>
import axios from  'axios'
export default {
  name: 'denomination',
  data () {
    return {
      data:'',
      tableData:[],
      denomination:[]
    }
  },
  methods:{
    home(){
      this.$router.push('/')
    }
  },
  async created(){
    await axios.get('http://localhost:3030/denomination')
    .then((res)=>{
      this.denomination=res.data.data[0].deno
    })

    axios.get('http://localhost:3030/balancecheck/'+this.$route.params.id)
    .then((res)=>{
      this.data=res.data
      let lastrans=this.data.trans[this.data.trans.length-1]
      for(let i=0;i<this.denomination.length;i++){
        if(~~(lastrans/this.denomination[i])>0){
          this.tableData.push({
            'Denomination':this.denomination[i],
            'number':~~(lastrans/this.denomination[i])
          })
          lastrans=lastrans%this.denomination[i]
        }
      }
        // console.log(this.tableData)





      // let thousand;
      // let fivehundred;
      // let hundred;
      // let temp
      // if(~~(lastrans/1000)>0){
      //   thousand=~~(lastrans/1000)

      //   temp={'Denomination':1000,
      //           'number':thousand }
      // this.tableData.push(temp)
      // lastrans=lastrans%1000
      // }
      // if(~~(lastrans/500)>0){
      //   fivehundred=~~(lastrans/500)
      //   temp={'Denomination':500,
      //           'number':fivehundred }
      // this.tableData.push(temp)
      // lastrans=lastrans%500
      // }
      // if(~~(lastrans/100)>0){
      //   hundred=~~(lastrans/100)
      //   temp={'Denomination':100,
      //           'number':hundred }
      // this.tableData.push(temp)
      // }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .main{
    margin: 200px;
  }
</style>
