function BlogListComponent(props) {
    let [blogFeed,setBlogFeed] = React.useState([]);
    let containerBlog = <p>oops</p>;

    //CONTAINER
    containerBlog = <div className="row row-cols-1 row-cols-md-3 g-4" id="feed">{blogFeed}</div>

    //RETURN LE TABLEAU
    return containerBlog;
}

export default BlogListComponent;