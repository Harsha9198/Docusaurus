import React from 'react';
import { Link } from '@docusaurus/router';

function BlogTile({ title, author, permalink }) {
  return (
    <Link to={permalink} className="blog-tile-link">
      <div className="blog-tile">
        <h2>{title}</h2>
        <p>Author: {author}</p>
      </div>
    </Link>
  );
}

export default BlogTile;
