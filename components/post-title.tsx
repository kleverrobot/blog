import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-sans text-space font-bold mb-12 text-center">
      {children}
    </h1>
  )
}

export default PostTitle
