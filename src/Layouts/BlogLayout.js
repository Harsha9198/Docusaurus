import React from 'react';
import { Link } from '@docusaurus/router';
import BlogPostItem from '@theme/BlogPostItem';

function BlogLayout(props) {
  const { items } = props;
  return (
    <div className="blog-layout">
      {items.map((item) => (
        <Link to={item.permalink} key={item.id} className="blog-post-tile">
          <h2>{item.frontMatter.title}</h2>
          <p>Author: {item.frontMatter.author}</p>
          {/* You can also display other blog metadata here if needed, like date and tags */}
        </Link>
      ))}
    </div>
  );
}

export default BlogLayout;
