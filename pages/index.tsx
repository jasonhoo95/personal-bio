import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
export default function Home() {
	return (
		<div>
			<Header />

			<section className="bg-home relative">
				<div className="bg-overlay"></div>

				<div style={{ zIndex: 2, flexDirection: "column" }} className="absolute flex w-full h-full justify-center items-center container mx-auto left-0 right-0">
					<h5 style={{ fontWeight: 400 }} className="text-white mb-3">
						UI / UX Designer 123.
					</h5>

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

			<section style={{ paddingTop: "90px", paddingBottom: "90px" }}>
				<div className="container mx-auto text-center">
					<div className="row justify-center">
						<div className="mb-5">
							<span className="material-icons md-36">face</span>
						</div>
						<h3>About me</h3>
						<p className="text-muted mx-auto mb-0 para-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry</p>
					</div>
					<div style={{ padding: "0px 15px" }}>
						<ul className="nav nav-tabs flex" id="tabs-tab">
							<li className="nav-item" role="presentation">
								<a className="nav-link" href="#tabs-home" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">
									Home
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link" href="#tabs-skill" data-bs-toggle="pill" data-bs-target="#tabs-skill" role="tab" aria-controls="tabs-skill" aria-selected="true">
									SKILL
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link" href="#tabs-resume" data-bs-toggle="pill" data-bs-target="#tabs-resume" role="tab" aria-controls="tabs-resume" aria-selected="true">
									RESUME
								</a>
							</li>
						</ul>
						<div className="tab-content" id="tabs-tabContent">
							<div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
								<div className="about-img mt-5 mb-5">
									<img src="/about-img.jpeg" alt="" className="img-fluid mx-auto d-block rounded-circle" />
								</div>
								<h3 className="mb-3">
									Dirio Walls <small className="text-muted"> - Graphic &amp; Web Designer</small>
								</h3>
								<p className="text-muted">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
									nesciunt.
								</p>
								<p className="text-muted">
									Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li
									grammatica, e li plu commun vocabules.
								</p>
							</div>
							<div className="tab-pane fade" id="tabs-skill" role="tabpanel" aria-labelledby="tabs-home-tab">
								<div style={{ margin: "0px -15px" }} className="flex md:flex-row flex-col">
									<div className="md:w-1/2 w-full">
										<div className="skills">
											<div className="skills-bar">
												<div className="bar">
													<div className="bar">
														<div className="info">
															<span>Photoshop</span>
														</div>
														<div className="progress-line">
															<span className="photoshop"></span>
														</div>
														<div className="bar">
															<div className="info">
																<span>HTML</span>
															</div>
															<div className="progress-line">
																<span className="html"></span>
															</div>
															<div className="bar">
																<div className="info">
																	<span>CSS</span>
																</div>
																<div className="progress-line">
																	<span className="css"></span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="md:w-1/2 w-full">
										<div className="skills">
											<div className="skills-bar">
												<div className="bar">
													<div className="bar">
														<div className="info">
															<span>Photoshop</span>
														</div>
														<div className="progress-line">
															<span className="bootstrap"></span>
														</div>
														<div className="bar">
															<div className="info">
																<span>HTML</span>
															</div>
															<div className="progress-line">
																<span className="javascript"></span>
															</div>
															<div className="bar">
																<div className="info">
																	<span>CSS</span>
																</div>
																<div className="progress-line">
																	<span className="php"></span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="tabs-resume" role="tabpanel" aria-labelledby="tabs-home-tab">
								<div style={{ margin: "0px -15px" }} className="flex md:flex-row flex-col">
									<div style={{ padding: "0px 15px" }} className="md:w-1/2 w-full">
										<div className="my-12">
											<h5 style={{ color: "#ff9800", fontWeight: 700 }} className="font-weight-bold text-center text-custom">
												Experiences
											</h5>
											<hr className="my-5" />
										</div>
										<div className="text-left">
											<h6 style={{ fontWeight: 600 }}>Web Developer</h6>
											<p className="text-muted">Titanium Navigations, 2017 - Continue</p>
											<hr className="my-5" />
										</div>
										<div className="text-left">
											<h6 style={{ fontWeight: 600 }}>Web Designer</h6>
											<p className="text-muted">Titanium Navigations, 2017 - Continue</p>
											<hr className="my-5" />
										</div>
										<div className="text-left">
											<h6 style={{ fontWeight: 600 }}>Web Designer</h6>
											<p className="text-muted">Titanium Navigations, 2017 - Continue</p>
											<hr className="my-5" />
										</div>
									</div>
									<div style={{ padding: "0px 15px" }} className="md:w-1/2 w-full">
										<div className="my-12">
											<h5 style={{ color: "#ff9800", fontWeight: 700 }} className="font-weight-bold text-center text-custom">
												Education
											</h5>
											<hr className="my-5" />
										</div>
										<div className="text-left">
											<h6 style={{ fontWeight: 600 }}>Web Developer</h6>
											<p className="text-muted">Titanium Navigations, 2017 - Continue</p>
											<hr className="my-5" />
										</div>
										<div className="text-left">
											<h6 style={{ fontWeight: 600 }}>Web Designer</h6>
											<p className="text-muted">Titanium Navigations, 2017 - Continue</p>
											<hr className="my-5" />
										</div>
										<div className="text-left">
											<h6 style={{ fontWeight: 600 }}>Web Designer</h6>
											<p className="text-muted">Titanium Navigations, 2017 - Continue</p>
											<hr className="my-5" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section style={{ paddingTop: "90px", backgroundColor: "#f8f9fa!important", paddingBottom: "90px" }}>
				<div className="container text-center mx-auto">
					<div className="section-title mb-4 pb-2">
						<h3 style={{ fontSize: "1.75rem" }}>My Services</h3>
						<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry</p>
					</div>

					<div className="flex">
						<div style={{ padding: "0px 15px" }} className="w-1/3">
							<div className="services-flip-box relative">
								<div className="front">FRONT</div>
								<div className="back">BACK</div>
							</div>
						</div>
						<div style={{ padding: "0px 15px" }} className="w-1/3">
							<div className="services-flip-box relative">
								<div className="front">FRONT</div>
								<div className="back">BACK</div>
							</div>{" "}
						</div>

						<div style={{ padding: "0px 15px" }} className="w-1/3">
							<div className="services-flip-box relative">
								<div className="front">FRONT</div>
								<div className="back">BACK</div>
							</div>{" "}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
