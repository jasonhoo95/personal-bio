import { useState } from "react";
import { Skill, Home, Resume } from "../interface/about";
import { AboutSkillJSON, AboutHomeJSON, ExperiencesJSON, EducationJSON } from "./editData";
export default function About() {
	const [skills, setSkill] = useState<Skill[]>(AboutSkillJSON);
	const [home, setHome] = useState<Home>(AboutHomeJSON);
	const [experience, setExperience] = useState<Resume[]>(ExperiencesJSON);
	const [education, setEducation] = useState<Resume[]>(EducationJSON);

	return (
		<div>
			<div className="mt-5 pt-2" style={{ padding: "0px 15px" }}>
				<ul className="nav nav-tabs flex" id="tabs-tab">
					<li className="nav-item" role="presentation">
						<a className="nav-link active" href="#tabs-home" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">
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
						<div className="about-img my-12">
							<img src={home.image} alt="" className="img-fluid mx-auto d-block rounded-circle" />
						</div>
						<h3 className="mb-3" dangerouslySetInnerHTML={{ __html: home.title }}></h3>
						<div dangerouslySetInnerHTML={{ __html: home.subtitle }}></div>
					</div>
					<div className="tab-pane fade" id="tabs-skill" role="tabpanel" aria-labelledby="tabs-home-tab">
						<div style={{ margin: "0px -15px" }} className="flex md:flex-row flex-col">
							<div className="md:w-1/2 w-full">
								{skills.map((o, key) => {
									if (key <= 2) {
										return (
											<div key={key} className="skills">
												<div className="skills-bar">
													<div className="bar">
														<div className="info">
															<span>{o.title}</span>
														</div>
														<div className="progress-line">
															<span style={{ width: o.percentage }}>
																<div className="absolute per-text">{o.percentage}</div>
															</span>
														</div>
													</div>
												</div>
											</div>
										);
									}
								})}
							</div>

							<div className="md:w-1/2 w-full">
								{skills.map((o, key) => {
									if (key >= 3) {
										return (
											<div key={key} className="skills">
												<div className="skills-bar">
													<div className="bar">
														<div className="info">
															<span>{o.title}</span>
														</div>
														<div className="progress-line">
															<span style={{ width: o.percentage }}>
																<div className="absolute per-text">{o.percentage}</div>
															</span>
														</div>
													</div>
												</div>
											</div>
										);
									}
								})}
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
								{experience.map((o, key) => {
									return (
										<div key={key} className="text-left">
											<h6 style={{ fontWeight: 600 }}>{o.title}</h6>
											<p className="text-muted">{o.subtitle}</p>
											<hr className="my-5" />
										</div>
									);
								})}
							</div>
							<div style={{ padding: "0px 15px" }} className="md:w-1/2 w-full">
								<div className="my-12">
									<h5 style={{ color: "#ff9800", fontWeight: 700 }} className="font-weight-bold text-center text-custom">
										Education
									</h5>
									<hr className="my-5" />
								</div>
								{education.map((o, key) => {
									return (
										<div key={key} className="text-left">
											<h6 style={{ fontWeight: 600 }}>{o.title}</h6>
											<p className="text-muted">{o.subtitle}</p>
											<hr className="my-5" />
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
