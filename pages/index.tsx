import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Services from "../components/services";
import dynamic from "next/dynamic";
import Testimonial from "../components/testimonial";
import News from "../components/news";
import CounterAnimation from "../components/counterAnimation";
import TypeWriterEffect from "../components/typeWriterEffect";
import About from "../components/about";
import Footer from "../components/footer";
const PortfolioComponent = dynamic(() => import("../components/portfolioComponent"), { ssr: false });

export default function Home() {
	return (
		<div>
			<Header />

			<section id="home" className="bg-home relative scrollspy">
				<div className="bg-overlay"></div>

				<div style={{ zIndex: 2, flexDirection: "column" }} className="absolute flex w-full h-full justify-center items-center container mx-auto left-0 right-0">
					<h5 style={{ fontWeight: 400 }} className="text-white mb-3">
						UI / UX Designer.
					</h5>
					<TypeWriterEffect />
					<p style={{ fontSize: "18px", maxWidth: "650PX" }} className="mx-auto text-white text-center">
						Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
					</p>

					<div className="mt-4 pt-2">
						<a href="#" className="btn btn-outline btn-round">
							Download CV <i className="mdi mdi-download ml-2"></i>
						</a>
					</div>
				</div>
			</section>

			<section className="scrollspy" id="about" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
				<div style={{ maxWidth: "1100px" }} className="mx-auto text-center">
					<div className="mb-6 pb-2 mx-auto justify-center w-1/2">
						<div className="section-title mb-6 pb-2 relative">
							<div className="mb-12">
								<img className="mx-auto" style={{ width: "2.5rem" }} src="/account-settings.svg" />
							</div>
							<h3>About me</h3>
							<p className="text-muted mx-auto mb-0 para-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry</p>
						</div>
					</div>
					<About />
				</div>
			</section>

			<section id="services" className="scrollspy" style={{ paddingTop: "90px", backgroundColor: "#f8f9fa!important", paddingBottom: "90px" }}>
				<div style={{ maxWidth: "1100px" }} className="text-center mx-auto">
					<div className="mb-6 pb-2 mx-auto justify-center w-1/2">
						<div className="section-title mb-6 pb-2 relative">
							<div className="mb-12">
								<img className="mx-auto" style={{ width: "2.5rem" }} src="/account-settings.svg" />
							</div>
							<h3>My Services</h3>
							<p className="text-muted mx-auto mb-0 para-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry</p>
						</div>
					</div>

					<Services />
				</div>
			</section>

			<section id="portfolio" className="scrollspy" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
				<div style={{ maxWidth: "1100px" }} className="text-center mx-auto">
					<div className="mb-6 pb-2 mx-auto justify-center w-1/2">
						<div className="section-title mb-6 pb-2 relative">
							<div className="mb-12">
								<img className="mx-auto" style={{ width: "2.5rem" }} src="/portfolio.svg" />
							</div>
							<h3>My Portfolio</h3>
							<p className="text-muted mx-auto mb-0 para-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry</p>
						</div>
					</div>

					<PortfolioComponent />
				</div>
			</section>

			<section id="counter" style={{ paddingTop: "90px", paddingBottom: "90px" }} className="bg-counter relative">
				<div className="bg-overlay"></div>
				<CounterAnimation />
			</section>

			<section id="testimonial" className="bg-[#f8f9fa] scrollspy" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
				<div style={{ maxWidth: "1100px" }} className="mx-auto text-center">
					<div className="mb-6 pb-2 mx-auto justify-center w-1/2">
						<div className="section-title mb-6 pb-2 relative">
							<div className="mb-12">
								<img className="mx-auto" style={{ width: "2.5rem" }} src="/customer-testimonial.svg" />
							</div>
							<h3>What People Say</h3>
							<p className="text-muted mx-auto mb-0 para-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry</p>
						</div>
					</div>

					<Testimonial />
				</div>
			</section>

			<section id="blog" className="scrollspy" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
				<div style={{ maxWidth: "1100px" }} className="mx-auto text-center">
					<div className="mb-6 pb-2 mx-auto justify-center w-1/2">
						<div className="section-title mb-6 pb-2 relative">
							<div className="mb-12">
								<img className="mx-auto" style={{ width: "2.5rem" }} src="/news.svg" />
							</div>
							<h3>Latest News</h3>
							<p className="text-muted mx-auto mb-0 para-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry</p>
						</div>
					</div>

					<News />
				</div>
			</section>

			<section id="contact" className="scrollspy" style={{ paddingTop: "90px", paddingBottom: "90px", background: "#242a35" }}>
				<div style={{ maxWidth: "1100px" }} className="mx-auto text-center">
					<div className="mb-6 pb-2 mx-auto justify-center w-1/2">
						<div className="section-title mb-6 pb-2 relative">
							<div className="mb-12">
								<img className="mx-auto" style={{ width: "2.5rem" }} src="/headphone.svg" />
							</div>
							<h3 className="text-white">Contact Me</h3>
							<p className="text-muted mx-auto mb-0 para-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry</p>
						</div>
					</div>

					<div className="flex flex-wrap">
						<div className="md:w-1/3 w-full p-4">
							<div className="flex flex-col items-center">
								<div className="mb-4">
									<img style={{ width: "1.75rem" }} src="/map-marker.svg" />
								</div>
								<div style={{ color: "#cacaca" }}>1271 Gladwell Street Longview, TX 75601</div>
							</div>
						</div>
						<div className="md:w-1/3 w-full p-4">
							<div className="flex flex-col items-center">
								<div className="mb-4">
									<img style={{ width: "1.75rem" }} src="/telephone.svg" />
								</div>
								<div style={{ color: "#cacaca" }}>
									562-481-5340
									<br />
									562-481-5340
								</div>
							</div>
						</div>
						<div className="md:w-1/3 w-full p-4">
							<div className="flex flex-col items-center">
								<div className="mb-4">
									<img style={{ width: "1.75rem" }} src="/email.svg" />
								</div>
								<div style={{ color: "#cacaca" }}>
									example@abc.com
									<br />
									example@abc.com
								</div>
							</div>
						</div>
					</div>

					<form>
						<div className="flex mt-12 flex-wrap">
							<div className="md:w-1/2 px-4 w-full mb-6">
								<input className="form-control w-full" type="text" name="name" placeholder="Your Name..." />
							</div>
							<div className="md:w-1/2 px-4 w-full mb-6">
								<input className="form-control w-full" type="email" name="email" placeholder="Your Email..." />
							</div>
						</div>
						<div className="flex">
							<div className="px-4 w-full mb-6">
								<input className="form-control w-full" type="text" name="name" placeholder="Your Subject..." />
							</div>
						</div>
						<div className="flex">
							<div className="px-4 w-full  mb-6">
								<textarea style={{ height: "100% !important" }} className="form-control w-full" rows={4} name="comments" placeholder="Your Message..." />
							</div>
						</div>
					</form>
				</div>
			</section>
			<Footer />
		</div>
	);
}
