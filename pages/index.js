import React from 'react'
import axios from 'axios'

function Index({posts}) {
  return (
    <div>
      {posts &&
        posts.length > 0 &&
        posts.data.map(post => <h1 key={post.id}>{post.title}</h1>)}
    </div>
  )
}

Index.getInitialProps = async (ctx) => {
  const res = await axios.get("https://jsonplaceholder.typeicode.com/posts")

  const {name} = ctx.query;

  return {posts: res.data}
}

export default Index
