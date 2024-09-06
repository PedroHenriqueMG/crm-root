import { registerApplication, start, type LifeCycles } from 'single-spa'

registerApplication({
	name: '@single-spa/dashboard',
	app: () => System.import<LifeCycles>('@crm/dashboard'),
	activeWhen: location => location.pathname === '/',
})

registerApplication({
	name: '@single-spa/auth',
	app: () => System.import<LifeCycles>('@crm/auth'),
	activeWhen: location => location.pathname === '/',
})

registerApplication({
	name: '@single-spa/gallery',
	app: () => System.import<LifeCycles>('@crm/gallery'),
	activeWhen: location => location.pathname === '/gallery',
})

registerApplication({
	name: '@single-spa/blog',
	app: () => System.import<LifeCycles>('@crm/blog'),
	activeWhen: ['/blog'],
})

registerApplication({
	name: '@single-spa/aside',
	app: () => System.import<LifeCycles>('@crm/aside'),
	activeWhen: ['/'],
})

registerApplication({
	name: '@single-spa/header',
	app: () => System.import<LifeCycles>('@crm/header'),
	activeWhen: ['/'],
})

registerApplication({
	name: '@single-spa/footer',
	app: () => System.import<LifeCycles>('@crm/footer'),
	activeWhen: ['/'],
})

start({
	urlRerouteOnly: true,
})
