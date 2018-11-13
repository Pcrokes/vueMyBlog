<template>
    <div class="cv-container">
        <section class="cv-wrapper animated zoomIn">
            <div class="cv-attachment-img">
                <img class="cv-img" src="../assets/cv-bg.jpeg" alt="关于我">
            </div>
        </section>
        <section class="me-wrapper">
            <el-row>
                 <el-col :span="8">
                     <el-card :body-style="{ padding: '0px' }">
                         <img src="../assets/me-introduce.jpeg" alt="" class="image">
                         <div class="card-div">
                            <h1 class="me-intro-h1">Charles Cx</h1>
                            <p class="card-cs" v-for="(v,index) in obj" :key="index">
                                {{v.value}}
                            </p>
                         </div>
                     </el-card>
                 </el-col>
                 <el-col :span="12" :offset="3">
                  <h1 class="Cv-label">标签</h1>
                   <ul>
                     <li v-for="list in lists" :key="list.id" class="Cv-lists">
                      {{list.value}}
                     </li>
                   </ul>
                 </el-col>
            </el-row>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      obj: [
        { value: 'Gender:Man' },
        { value: 'City:ShangHai Suzhou Wuxi' },
        { value: 'Age:22' },
        { value: 'Work Experience:1 year' },
        { value: 'Position:Web developer' },
        { value: 'Email:CharlesCx@163.com' }
      ],
      lists: [
        { id: 1, value: 'Vue' },
        { id: 2, value: 'React' },
        { id: 3, value: 'MongoDB' },
        { id: 4, value: 'Node' },
        { id: 5, value: 'Nginx' },
        { id: 6, value: 'Express' },
        { id: 7, value: 'Koa' },
        { id: 8, value: 'Html' },
        { id: 9, value: 'CSS' },
        { id: 10, value: 'JavaScript' },
        { id: 11, value: 'python studying' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cv-wrapper {
  position: relative;
  width: 100%;
  margin: 0.3rem 0 2rem 0;
  .cv-img {
    display: inline-block;
    width: 100%;
  }
}
.me-wrapper {
  width: 90rem;
  max-width: 90rem;
  margin: 0 auto;
  .card-div {
    padding: 14px;
    background: linear-gradient(270deg, #dbdad8 33%, #f7e0d3 73%);
    height: 380px;
    .me-intro-h1 {
      text-align: center;
      font-size: 1.6rem;
      font-weight: bold;
      color: #fff;
      padding: 10px 0;
    }
    .card-cs {
      color: #fff;
      padding: 1rem 1rem;
      letter-spacing: 0.05rem;
      font-size: 1.2rem;
    }
  }
  .Cv-label {
    font-size: 1.4rem;
    padding: 1rem 0;
    font-family: sans-serif;
    font-weight: 500;
  }
  .Cv-lists {
    float: left;
    width: 120px;
    padding: 1rem 0.5rem;
    font-size: 1rem;
    border: 1px solid rgb(81, 164, 241);
    border-radius: 5px;
    text-align: center;
    margin: 8px;
  }
}
</style>
