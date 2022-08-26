import { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import $ from "jquery";
import "magnific-popup";
import { PortfolioJSON, PortfolioFilterJSON } from "./editData";
import { Portfolio, PortfolioFilter } from "../interface/data";
var imagesLoaded = require("imagesloaded");
export default function PortfolioComponent() {
	const [filter, setFilter] = useState<PortfolioFilter[]>(PortfolioFilterJSON);
	const [data, setData] = useState<Portfolio[]>(PortfolioJSON);
	const [state, setState] = useState<{
		iso: any;
	}>({
		iso: "",
	});

	useEffect(() => {
		console.log(data, "data portfolio return");
	}, []);
	useEffect(() => {
		var elem = document.querySelector(".isotope-main");
		const iso = new Isotope(elem, {
			// options
			itemSelector: ".element-item",
			layoutMode: "fitRows",
		});
		imagesLoaded(elem).on("progress", function () {
			// layout Isotope after each image loads
			iso.layout();
		});

		setState({ iso: iso });
		var buttonClick = document.querySelectorAll(".categories");
		for (var i = 0; i < buttonClick.length; i++) {
			buttonClick[i].classList.remove("active");
			buttonClick[i].addEventListener("click", function (e) {
				const target = e.target as Element;
				target.classList.add("active");
			});
		}

		$(".isotope-main").magnificPopup({
			type: "image",
			delegate: "a",
			gallery: { enabled: true },
			// other options
		});
	}, []);

	const filterFN = (type: string, target: Element) => {
		var buttonClick = document.querySelectorAll(".categories");

		for (var i = 0; i < buttonClick.length; i++) {
			buttonClick[i].classList.remove("active");
		}
		target.classList.add("active");
		state.iso.arrange({
			filter: "." + type,
		});
		// setFilter(type);
	};
	return (
		<div>
			<div className="flex mt-4 pt-2 container-filter justify-center flex-wrap">
				{filter.map((o, key) => {
					return (
						<li>
							<a
								onClick={(e) => {
									const target = e.target as Element;
									filterFN(o.type, target);
								}}
								className="categories active">
								{o.name}
							</a>
						</li>
					);
				})}
			</div>
			<div className="flex pt-2 mt-4 flex-wrap isotope-main">
				{data.map((o, key) => {
					return (
						<div style={{ padding: "0px 3px" }} className={`md:w-1/3 element-item ${o.type} mt-2 relative overflow-hidden`}>
							<a className="link-img" href="/img-1.jpeg">
								<div>
									<img src={o.image} />
								</div>
								<div className="item-mask">
									<div className="item-caption text-white text-center">
										<h5>{o.mask.title}</h5>
										<p className="text-uppercase">{o.mask.subTitle}</p>
									</div>
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
