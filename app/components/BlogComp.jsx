'use client'
import "./BlogComp.css"
import Post from "./Post"
import { Slide } from "react-awesome-reveal";

function BlogComponente({ props }) {

  const data = props;

  return (
    <div className="blog-container">
      <Slide>
        <h1 className="h1-page">Tips que deberías saber</h1>
      </Slide>
      <div className="articles-container">
        <Slide cascade damping={0.2}>
        {data?.map((post, index) => (
          <Post
            key={index}
            post={post.attributes}/>
        ))}
        </Slide>
      </div>
    </div>
  )
}

export default BlogComponente
