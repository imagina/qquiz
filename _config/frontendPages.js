//Layout container
import master from 'src/layouts/master'
import account from 'src/layouts/account'


//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
	//test
	test: {
		permission: null,
		activated: true,
		path: '/iquiz/account/test',
		name: 'qquiz.account.test',
		layout: require('@imagina/qquiz/_layouts/frontend/test/index').default,
		containerLayout: account,
		title: 'qquiz.sidebar.adminPolls',
		icon: 'fas fa-poll',
		middleware: [auth,access]
	},
}
