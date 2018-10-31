<template>
  <div class="main">
  <el-form>
   <el-form-item label="Please Enter Account Number:">
    <el-input v-model="accNo"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="Submit()">Submit</el-button>
  </el-form-item>
  <el-form-item v-if="balance!=''" label="Available Balance:">
    <el-input v-model="balance" disabled></el-input>
  </el-form-item>
  <el-form-item v-if="balance!=''">
  <el-button type="primary" @click="withdraw()">Withdraw</el-button>
  </el-form-item>
  </el-form>
  </div>
</template>

<script>
import axios from  'axios'
export default {
  name: 'index',
  data () {
    return {
      accNo:'',
      balance:'',
      id:''
    }
  },
  methods:{
    Submit(){
      axios.get("http://localhost:3030/balancecheck")
      .then((res)=>{
        let check=false
        for(let i=0;i<res.data.data.length;i++){
          if(this.accNo==res.data.data[i].accNo){
            check=true
            this.balance=res.data.data[i].Accbalance
            this.id=res.data.data[i].id
          }
        }
        if(check!=true){
          alert('Account Number not found.Please try again')
          this.accNo=''
        }
      })

    },
    withdraw(){
      this.$router.push('/withdraw/'+this.id) 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .main{
    margin: 200px;
  }
</style>
