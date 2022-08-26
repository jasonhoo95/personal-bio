import { useEffect, useState } from "react";
import $ from "jquery";
import { Counter } from "../interface/counter";
import { CounterJSON } from "./editData";
export default function CounterAnimation() {
	const [data, setData] = useState<Counter[]>(CounterJSON);
	useEffect(() => {
		var a = 0;
		$(window).scroll(function () {
			var oTop = $("#counter").offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
				$(".counter-value").each(function () {
					var $this = $(this),
						countTo = $this.attr("data-count");
					console.log(countTo, "count animation");
					$({
						countNum: $this.text(),
					}).animate(
						{
							countNum: countTo,
						},

						{
							duration: 2000,
							easing: "swing",
							step: function () {
								$this.text(Math.floor(this.countNum));
							},
							complete: function () {
								$this.text(this.countNum);
								//alert('finished');
							},
						}
					);
				});
				a = 1;
			}
		});
	}, []);
	return (
		<div style={{ maxWidth: "1000px" }} className="flex w-full flex-wrap relative mx-auto">
			{data.map((o, key) => {
				return (
					<div key={key} className="counter-content text-center md:w-1/4 w-full p-6">
						<h1 className="counter-value mb-3 text-white font-bold" data-count={o.number}>
							0
						</h1>
						<h6 className="counter-name text-white">{o.title}</h6>
					</div>
				);
			})}
		</div>
	);
}
