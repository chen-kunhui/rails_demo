//= require 'vue/dist/vue'
//= require 'element-ui/lib/index'

class Homepage {
  constructor(){
    this.app = new Vue({
      el: "#vue-app",
      data: function(){
        return {
          tableData: [
            {uuid: 'abc', app: '来自 loki ', filename: 'test.csv'},
            {uuid: 'def', app: '来自 loki ', filename: 'test.csv'},
            {uuid: 'efg', app: '来自 loki ', filename: 'test.csv'}
          ],
          filStatus: {
            abc: 0,
            def: 1,
            efg: 2
          }
        }
      },
      methods: {
        change(uuid, value){
          if (this.filStatus[uuid] != undefined) {
            this.filStatus[uuid] += value
          }
        },
        download(key){
          console.log("todo download ..")
        }
      },
      template: `
        <div class='container'>
          <div class='center' style="width: 60%;margin-top: 5%;">
            <template>
              <el-divider>
                <el-avatar :size="50" >C</el-avatar>
              </el-divider>
              <el-table :data="tableData" style="width: 100%;margin-top: 5%;" stripe :show-header="false" highlight-current-row>

                <el-table-column type="index"></el-table-column>

                <el-table-column prop='app' label="app" width="200"></el-table-column>

                <el-table-column prop="filename" label="文件" width="200">
                </el-table-column>

                <el-table-column label="进度">
                  <template slot-scope="scope">
                    <!--<el-progress :percentage="filStatus[scope.row.uuid]" color="#f56c6c"></el-progress>-->
                    <el-steps :space="400" :active="filStatus[scope.row.uuid]" finish-status="success">
                      <el-step title="队列中" :icon="filStatus[scope.row.uuid] == 0 ? 'el-icon-loading' : ''"></el-step>
                      <el-step title="获取数据" :icon="filStatus[scope.row.uuid] == 1 ? 'el-icon-loading' : ''"></el-step>
                      <el-step title="生成下载文件" :icon="filStatus[scope.row.uuid] == 2 ? 'el-icon-loading' : ''"></el-step>
                    </el-steps>
                  </template>
                </el-table-column>

                <el-table-column label="下载" width="100">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="download(scope.row.uuid)">下载</el-button>
                  </template>
                </el-table-column>

              </el-table>
            </template>

            <el-divider></el-divider>
          </div>
        </div>
      `
    })
  }

  update(key, value){
    let app = this.app
    window.abc = setInterval(function () {
      app.change('abc', 0.0012)
      if (app.filStatus['abc'] == 100){
        clearInterval(window.abc);
      }
    }, 1000);
    // this.app.change(key, value)
  }
}
