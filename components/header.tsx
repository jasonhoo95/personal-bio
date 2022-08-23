export default function Header() {
	return (
		<div style={{ zIndex: 10 }} className="fixed top-0 w-full bg-white">
			<div style={{ maxWidth: "1191px" }} className="flex py-5 mx-5 ml-auto mr-auto">
				<div className="logo">DIRIO</div>

				<div className="flex ml-auto collapsable">
					<div className="px-5">Home</div>
					<div className="px-5">About</div>
					<div className="px-5">Services</div>
					<div className="px-5">Portfolio</div>
					<div className="px-5">Portfolio</div>
					<div className="px-5">Testimonial</div>
					<div className="px-5">Blog</div>
					<div className="px-5">Contact</div>
				</div>
			</div>
		</div>
	);
}
