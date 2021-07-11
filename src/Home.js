import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum dolor...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum dolor sit amet...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  return (
    <div className="home">
      {/* Pass blogs object from line 5 as a prop and store it in a variable called blogs */}
      <BlogList blogs={blogs} title="All blogs" />
    </div>
   );
}

export default Home;