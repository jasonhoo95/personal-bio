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
import Contact from "../components/contact";
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
					<About />
				</div>
			</section>

			<section id="services" className="scrollspy" style={{ paddingTop: "90px", backgroundColor: "#f8f9fa!important", paddingBottom: "90px" }}>
				<div style={{ maxWidth: "1100px" }} className="text-center mx-auto">
					<Services />
				</div>
			</section>

			<section id="portfolio" className="scrollspy" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
				<div style={{ maxWidth: "1100px" }} className="text-center mx-auto">
					<PortfolioComponent />
				</div>
			</section>

			<section id="counter" style={{ paddingTop: "90px", paddingBottom: "90px" }} className="bg-counter relative">
				<div className="bg-overlay"></div>
				<CounterAnimation />
			</section>

			<section id="testimonial" className="bg-[#f8f9fa] scrollspy" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
				<div style={{ maxWidth: "1100px" }} className="mx-auto text-center">
					<Testimonial />
				</div>
			</section>

			<section id="blog" className="scrollspy" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
				<div style={{ maxWidth: "1100px" }} className="mx-auto text-center">
					<News />
				</div>
			</section>

			<section id="contact" className="scrollspy" style={{ paddingTop: "90px", paddingBottom: "90px", background: "#242a35" }}>
				<div style={{ maxWidth: "1100px" }} className="mx-auto text-center">
					<Contact />
				</div>
			</section>
			<Footer />
		</div>
	);
}
