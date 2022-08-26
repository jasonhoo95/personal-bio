import { useEffect, useState } from "react";
import $ from "jquery";
import scrollSpy from "simple-scrollspy";
export default function Header() {
	const [display, setDisplay] = useState(false);
	useEffect(() => {
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 100) {
				$(".fixNavBar").addClass("bg-white  nav-sticky");
				$(".fixNavBar").css("padding", "10px 0px");
			} else if ($(window).scrollTop() == 0) {
				$(".fixNavBar").removeClass("bg-white  nav-sticky");
				$(".fixNavBar").addClass("text-white");
				$(".fixNavBar").css("padding", "20px 0px");
			}
		});
		scrollSpy("#main-menu", {
			sectionClass: ".scrollspy",
			menuActiveTarget: ".menu-item",
			offset: 100,
			// smooth scroll
			smoothScroll: true,
		});
	}, []);
	return (
		<>
			<style jsx>
				{`
					.fixNavBar {
						transition: all 0.5s;
						padding: 20px 0px;
						color: white;
					}

					.nav-sticky {
						box-shadow: 0 10px 33px rgb(0 0 0 / 10%);
						color: black;
					}

					.menu-item {
						transition: all 0.3s;
					}

					.menu-item.active {
						color: #ff9800;
					}

					@media screen and (max-width: 750px) {
						.fixNavBar {
							background-color:white !important;
							transition:none !important;
							padding:20px !important;
							color:black !important;
						}
					
				`}
			</style>
			<div style={{ zIndex: 10 }} className="fixed  top-0 w-full fixNavBar">
				<div style={{ maxWidth: "1191px", padding: "0px 20px" }} className="flex justify-between  mx-5 ml-auto mr-auto items-center">
					<div className="logo md">DIRIO</div>

					<div id="main-menu" className="flex ml-auto collapsable">
						<div className="px-5 py-[6px]">
							<a className="menu-item" href="#home">
								Home
							</a>
						</div>
						<div className="px-5 py-[6px]">
							<a className="menu-item" href="#about">
								About
							</a>
						</div>
						<div className="px-5 py-[6px]">
							<a className="menu-item" href="#services">
								Services
							</a>
						</div>
						<div className="px-5 py-[6px]">
							<a className="menu-item" href="#portfolio">
								Portfolio
							</a>
						</div>
						<div className="px-5 py-[6px]">
							<a className="menu-item" href="#testimonial">
								Testimonial
							</a>
						</div>
						<div className="px-5 py-[6px]">
							<a className="menu-item" href="#blog">
								Blog
							</a>
						</div>
						<div className="px-5 py-[6px]">
							{" "}
							<a className="menu-item" href="#contact">
								Contact
							</a>
						</div>
					</div>
					<div className="md:hidden block " data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						<img width="24px" src="/menu.svg" />
					</div>
				</div>
				<div id="collapseOne" className="accordion-collapse collapse  md:hidden block" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<div className="px-5 py-[6px]">
						<a className="menu-item" href="#home">
							Home
						</a>
					</div>
					<div className="px-5 py-[6px]">
						<a className="menu-item" href="#about">
							About
						</a>
					</div>
					<div className="px-5 py-[6px]">
						<a className="menu-item" href="#services">
							Services
						</a>
					</div>
					<div className="px-5 py-[6px]">
						<a className="menu-item" href="#portfolio">
							Portfolio
						</a>
					</div>
					<div className="px-5 py-[6px]">
						<a className="menu-item" href="#testimonial">
							Testimonial
						</a>
					</div>
					<div className="px-5 py-[6px]">
						<a className="menu-item" href="#blog">
							Blog
						</a>
					</div>
					<div className="px-5 py-[6px]">
						<a className="menu-item" href="#contact">
							Contact
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
