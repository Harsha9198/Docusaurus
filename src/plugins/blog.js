import React from 'react';
import Layout from '@theme/Layout';
import BlogLayout from '../Layouts/BlogLayout'; // Make sure the import path is correct

function BlogPage() {
  return (
    <Layout>
      <main>
        <BlogLayout />
      </main>
    </Layout>
  );
}

export default BlogPage;
