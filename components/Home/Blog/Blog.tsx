import SectionHeading from "@/components/Helper/SectionHeading";
import { blogs } from "@/Data/data";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Our Blog</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid  grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
