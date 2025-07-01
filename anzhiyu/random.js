var posts=["2025/05/19/hello/","2025/05/19/hello-world/","2025/05/19/Hello-world-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };