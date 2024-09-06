import { registerApplication, start, type LifeCycles } from 'single-spa'

registerApplication({
	name: '@single-spa/welcome',
	app: () =>
		System.import<LifeCycles>(
			'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js',
		),
	activeWhen: ['/'],
})

// registerApplication({
//   name: "@crm/navbar",
//   app: () => System.import("@crm/navbar"),
//   activeWhen: ["/"]
// });

start({
	urlRerouteOnly: true,
})
