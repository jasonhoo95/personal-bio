export default function Footer() {
	return (
		<footer className="footer">
			<div className="text-center">
				<h4 className="mb-4 logo">
					<a href="#" className="text-dark">
						DIRIO
					</a>
				</h4>
				<ul className="social-icons mb-4 flex justify-center list-inline">
					<li className="list-inline-item">
						<a href="#" className="">
							<i className="fa fa-facebook-f" style={{ fontSize: "15px" }}></i>
						</a>
					</li>
					<li className="list-inline-item">
						<a href="#" className="">
							<i className="fa fa-twitter" style={{ fontSize: "15px" }} aria-hidden="true"></i>
						</a>
					</li>
					<li className="list-inline-item">
						<a href="#" className="">
							<i className="fa fa-instagram" style={{ fontSize: "15px" }} aria-hidden="true"></i>
						</a>
					</li>
					<li className="list-inline-item">
						<a href="#" className="">
							<i className="fa fa-google" style={{ fontSize: "15px" }} aria-hidden="true"></i>
						</a>
					</li>
					<li className="list-inline-item">
						<a href="#" className="">
							<i className="fa fa-linkedin" style={{ fontSize: "15px" }} aria-hidden="true"></i>
						</a>
					</li>
				</ul>
				<p className="copyright-desc text-muted mb-0">
					© 2019 - 2020 Dirio. Design with <i className="mdi mdi-heart text-danger"></i> Themesdesign
				</p>
			</div>
		</footer>
	);
}
