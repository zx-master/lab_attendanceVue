<template>
  <div class="wholebody wholebody-1" :style="{height:screenHeight}">
    <div class="scrollbar">
      <div style="width:100%;padding:26px;">
        <chart></chart>
      </div>
      <div style="width:60%;padding:26px;">
        <circularchart></circularchart>
      </div>
      <div style="width:40%;padding:26px;">
        <mu-container>
          <mu-paper :z-depth="3">
            <mu-data-table
              stripe
              :columns="columns"
              :sort.sync="sort"
              @sort-change="handleSortChange"
              :data="list.slice(0, 7)"
            >
              <template slot-scope="scope">
                <td>{{scope.row.classname}}</td>
                <td class="is-right">{{scope.row.calories}}</td>
              </template>
            </mu-data-table>
          </mu-paper>
        </mu-container>
      </div>
    </div>
  </div>
</template>

<script>
import chart from "../components/linechart";
import circularchart from "../components/CircularChart";
export default {
  data() {
    return {
      screenHeight: "",
      sort: {
        classname: "",
        order: "asc"
      },
      columns: [
        { title: "班级", width: 250 , name: "classname",align:"center",cellAlign:"center" },
        {title: "出勤率(%)",name: "calories",align:"center", width: 160, sortable: true}       
      ],
      list: [
        {
          classname: "16软工5班",
          calories: 99,
        },
        {
          classname: "16软工4班",
          calories: 97,
        },
        {
          classname: "16软工3班",
          calories: 91,
        },
        {
          classname: "16软工2班",
          calories: 94,
        },
        {
          classname: "16软工1班",
          calories: 98
        },
        {
          classname: "16软工7班",
          calories: 97
        },
        {
          classname: "16软工6班",
          calories: 93
        },
        {
          classname: "16软工8班",
          calories: 95
        },
        {
          classname: "16软工9班",
          calories: 97
        },
        {
          classname: "16软工10班",
          calories: 98
        }
      ]
    };
  },

  components: {
    chart,
    circularchart
  },

  methods: {
    handleSortChange({ classname, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[classname] - b[classname] : b[classname] - a[classname]
      );
    }
  },
  created() {
    this.screenHeight = window.screen.availHeight - 149 + "px";
  }
};
</script>


<style scoped>
.wholebody {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  overflow: auto;
  border: none;
  height: 610px;
  padding: 30px 39px;
}

.scrollbar {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.wholebody-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.wholebody-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.wholebody-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
.mu-table td, .mu-table td.is-left{
  text-align: center;
}
</style>