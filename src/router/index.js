import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import AttendanceCheck from '@/view/AttendanceCheck'
import StudentInfo from '@/view/StudentInfo'
import ApplyLeave from '@/view/ApplyLeave'
import LeaveStatus from '@/view/LeaveStatus'
import ChangeSelf from '@/view/ChangeSelf'
import Curriculum from '@/view/CurriculumView'
import TeacherInfo from '@/view/TeacherInfo'
import CollectiveInfo from '@/view/CollectiveInfo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path:'/AttendanceCheck',
      name:'AttendanceCheck',
      component:AttendanceCheck
    },
    {
      path:'/StudentInfo',
      name:'StudentInfo',
      component:StudentInfo
    },
    {
      path:'/ApplyLeave',
      name:'ApplyLeave',
      component:ApplyLeave
    },
    {
      path:'/LeaveStatus',
      name:'LeaveStatus',
      component:LeaveStatus
    },
    {
      path:'/ChangeSelf',
      name:'ChangeSelf',
      component:ChangeSelf
    },
    {
      path:'/Curriculum',
      name:'Curriculum',
      component:Curriculum
    },
    {
      path:'/TeacherInfo',
      name:'TeacherInfo',
      component:TeacherInfo
    },
    {
      path:'/CollectiveInfo',
      name:'CollectiveInfo',
      component:CollectiveInfo
    }
  ]
})
