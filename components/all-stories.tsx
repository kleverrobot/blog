import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const AllStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default AllStories
