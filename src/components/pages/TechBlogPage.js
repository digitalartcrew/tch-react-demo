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
					<div class="col-lg-4 mb-5">
						<div class="card h-100 shadow border-0">
							<img
								class="card-img-top"
								src="https://dummyimage.com/600x350/adb5bd/495057"
								alt="..."
							/>
							<div class="card-body p-4">
								<div class="badge bg-primary bg-gradient rounded-pill mb-2">
									Media
								</div>
								<a
									class="text-decoration-none link-dark stretched-link"
									href="#!"
								>
									<div class="h5 card-title mb-3">{blog.title}</div>
								</a>
								<p class="card-text mb-0">
									This text is a bit longer to illustrate the adaptive height of
									each card. Some quick example text to build on the card title
									and make up the bulk of the card's content.
								</p>
							</div>
							<div class="card-footer p-4 pt-0 bg-transparent border-top-0">
								<div class="d-flex align-items-end justify-content-between">
									<div class="d-flex align-items-center">
										<img
											class="rounded-circle me-3"
											src="https://dummyimage.com/40x40/ced4da/6c757d"
											alt="..."
										/>
										<div class="small">
											<div class="fw-bold">Josiah Barclay</div>
											<div class="text-muted">
												March 23, 2021 &middot; 4 min read
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TechBlogPage;
