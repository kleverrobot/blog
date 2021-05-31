import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mb-2 font-sans text-space">
      {children}
    </h1>
  )
}

export default PostTitle
