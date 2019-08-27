const pages = config('pages') // Get Pages from config

//Quizs
export default [
  {
    title: 'qquiz.sidebar.adminGroup',
    icon: 'fas fa-map-marked-alt',
    children: [
      pages.qquiz.polls, // poll setup
    ]
  },
]
