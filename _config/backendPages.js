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
  },
  pollsCreate: {
    permission: 'iquiz.polls.create',
    activated: true,
    path: '/iquiz/polls/create',
    name: 'qquiz.admin.polls.create',
    layout: require('@imagina/qquiz/_layouts/admin/polls/form').default,
    containerLayout: master,
    title: 'qquiz.sidebar.adminPollsCreate',
    icon: 'fas fa-poll',
    middleware: [auth,access]
  },
  pollsUpdate: {
    permission: 'iquiz.polls.edit',
    activated: true,
    path: '/iquiz/polls/:id',
    name: 'qquiz.admin.polls.edit',
    layout: require('@imagina/qquiz/_layouts/admin/polls/form').default,
    containerLayout: master,
    title: 'qquiz.sidebar.adminPollsUpdate',
    icon: 'fas fa-poll',
    middleware: [auth,access]
  },
  questions: {
    permission: 'iquiz.questions.manage',
    activated: true,
    path: '/iquiz/questions/index/poll/:id',
    name: 'qquiz.admin.questions.index',
    layout: require('@imagina/qquiz/_layouts/admin/questions/index').default,
    containerLayout: master,
    title: 'qquiz.sidebar.adminQuestions',
    icon: 'fas fa-question-circle',
    middleware: [auth,access]
  },
  questionsCreate: {
    permission: 'iquiz.questions.create',
    activated: true,
    path: '/iquiz/questions/create',
    name: 'qquiz.admin.questions.create',
    layout: require('@imagina/qquiz/_layouts/admin/questions/form').default,
    containerLayout: master,
    title: 'qquiz.sidebar.adminQuestionsCreate',
    icon: 'fas fa-question-circle',
    middleware: [auth,access]
  },
  answers: {
    permission: 'iquiz.answers.manage',
    activated: true,
    path: '/iquiz/answers/index/question/:id',
    name: 'qquiz.admin.answers.index',
    layout: require('@imagina/qquiz/_layouts/admin/answers/index').default,
    containerLayout: master,
    title: 'qquiz.sidebar.adminAnswers',
    icon: 'fas fa-question-circle',
    middleware: [auth,access]
  },

}
