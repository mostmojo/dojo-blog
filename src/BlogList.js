const BlogList = ({ blogs, title }) => {
  // without destructuring, you pass props as an argument and get the blogs using props.blogs. With destructuring there's no need
  // const  blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
   );
  }

export default BlogList;