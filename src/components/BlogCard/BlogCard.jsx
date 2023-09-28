import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

import article from 'data/article.json';

export const BlogCard = () => {
  return (
    <BlogCard
      poster={article.poster}
      tag={article.tag}
      title={article.title}
      description={article.description}
      userName={article.name}
      avatar={article.avatar}
      postedAt={article.postedAt}
    />
  );
};
