const blogData = [
	{ id: 1, title: "Blog Title 1", description: "lorem test ckdhvbckjdb" },
	{ id: 2, title: "Blog Title 2", description: "lorem test ckdhvbckjdb" },
	{ id: 3, title: "Blog Title 3", description: "lorem test ckdhvbckjdb" },
	{ id: 4, title: "Blog Title 4", description: "lorem test ckdhvbckjdb" },
];

const TechBlogPage = () => {
	const editBlogPost = (id) => {
		blogData[0 + parseInt(id)].title = "New Title";

		debugger;

		console.log(`Edit Working ${id}`);
	};

	const deleteBlogPost = (id) => console.log(`Delete Working ${id}`);

	return (
		<div>
			<h1>TCH Blog Post</h1>
			{blogData.map((blog) => {
				return (
					<div>
						<h2>{blog.title}</h2>
						<span>Author: Donte Burney</span>
						<p>{blog.description}</p>
						<button onClick={() => editBlogPost(blog.id)}>Edit</button>
						<button onClick={() => deleteBlogPost(blog.id)}>Delete</button>
					</div>
				);
			})}
		</div>
	);
};

export default TechBlogPage;
