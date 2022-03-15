import { TitleProps } from "react-admin";

export const PostTitle = ({ record }: TitleProps) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};
