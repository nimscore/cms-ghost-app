/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.ghost.org',
				port: '',
				pathname: '/my-account/**'
			},
			{
				protocol: 'https',
				hostname: 'nano.sudoers.pro',
				port: '',
				pathname: '**'
			}
		]
	}
}
