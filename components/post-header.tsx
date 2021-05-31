import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <div className="flex items-center mb-8">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto">
        <PostTitle>{title}</PostTitle>
        <div className="text-xl font-light text-space-light">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
