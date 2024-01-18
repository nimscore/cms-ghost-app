import Container from '@/components/container'
import Header from '@/components/header'
import Layout from '@/components/layout'
import MoreStories from '@/components/more-stories'
import PostBody from '@/components/post-body'
import PostHeader from '@/components/post-header'
import PostTitle from '@/components/post-title'
import SectionSeparator from '@/components/section-separator'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api'
import { CMS_NAME } from '@/lib/constants'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Post({ post, morePosts, preview }) {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}
	return (
		<Layout preview={preview}>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article>
							<Head>
								<title>
									{`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
								</title>
								<meta property="og:image" content={post.feature_image} />
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.feature_image}
								date={post.published_at}
								author={post.primary_author}
							/>
							<PostBody content={post.html} />
						</article>
						<SectionSeparator />
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</>
				)}
			</Container>
		</Layout>
	)
}

export async function getStaticProps({ params, preview = null }) {
	const { post, morePosts } = await getPostAndMorePosts(params.slug, preview)
	return {
		props: {
			preview,
			post,
			morePosts: morePosts || []
		}
	}
}

export async function getStaticPaths() {
	const allPosts = (await getAllPostsWithSlug()) || []
	return {
		paths: allPosts.map((post) => `/blog/posts/${post.slug}`),
		fallback: true
	}
}
