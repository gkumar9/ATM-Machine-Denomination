<template>
  <div class="main">
  <el-form>
   <el-form-item label="Please Enter Amount to be Withdrawn:">
    <el-input v-model="amount"></el-input>
  </el-form-item>
  <el-form-item v-if="balance!=''">
  <el-button type="primary" @click="checkout()">Withdraw</el-button>
  </el-form-item>
  </el-form>
  </div>
</template>

<script>
import axios from  'axios'
export default {
  name: 'withdraw',
  data () {
    return {
      amount:'',
      trans:'',
      balance:''
    }
  },
  methods:{
    checkout(){

      if(this.amount%100==0 &&this.amount<=this.balance){
        this.balance=this.balance-this.amount
        this.trans.push(this.amount)
        axios.patch('http://localhost:3030/balancecheck/'+this.$route.params.id,{
          Accbalance:this.balance,
          trans:this.trans
        }).then((res)=>{

        this.$router.push('/denomination/'+this.$route.params.id)
        })
      }
      else{
        alert('Amount invalid')
        this.amount=''
      }
    }
  },
  created(){
    axios.get('http://localhost:3030/balancecheck/'+this.$route.params.id)
    .then((res)=>{
      this.trans=res.data.trans
      this.balance=res.data.Accbalance
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
