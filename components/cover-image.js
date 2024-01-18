import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, url, slug, width, height }) {
	const image = (
		<Image
			src={url}
			alt={`Cover Image for ${title}`}
			className={cn('shadow-sm', {
				'hover:shadow-md transition-shadow duration-200': slug
			})}
			layout="responsive"
			width={width}
			height={height}
		/>
	)
	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link href={`/posts/${slug}`} aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	)
}
