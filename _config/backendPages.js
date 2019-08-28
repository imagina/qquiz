//Layout container
import master from 'src/layouts/master'

//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
  polls: {
    permission: 'iquiz.polls.manage',
    activated: true,
    path: '/iquiz/polls/index',
    name: 'qquiz.admin.polls.index',
    layout: require('@imagina/qquiz/_layouts/admin/polls/index').default,
    containerLayout: master,
    title: 'qquiz.sidebar.adminPolls',
    icon: 'fas fa-poll',
    middleware: [auth,access]
  }

}
