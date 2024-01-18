import Layout from '@/components/layout'
import { CMS_NAME } from '@/lib/constants'
import Head from 'next/head'

export default function Index() {
	return (
		<>
			<Layout>
				<Head>
					<title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
				</Head>
				<p>dsa</p>
			</Layout>
		</>
	)
}
