import { blogs } from "../../data/Data";
import { SectionTitle } from "../sectionTitle/SectionTitle";

const Blogs = () => {
  return (
    <div id="blog" className="section">
      <SectionTitle title={"Latest Articles"} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => {
          return (
            <div key={idx} className="shadow-md hover:shadow-none p-2">
              <img src={blog.image} alt="blog" />
              <div className="mt-3">
                <div className="font-bold text-xl">{blog.title}</div>
                <p className="text-[0.9rem] mt-2 opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias repellendus rem optio excepturi nesciunt suscipit
                  vero voluptas in impedit dolorum est, pariatur quasi magni
                  fugiat aspernatur. Facere aliquam quidem voluptatem?
                </p>
                <button className="text-[0.9rem] mt-2 text-red-500">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
