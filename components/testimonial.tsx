import { useState } from "react";
import { Testimonail } from "../interface/testimonail";
import { TestimonialJSON } from "./editData";

export default function Testimonial() {
	const [data, setData] = useState<Testimonail[]>(TestimonialJSON);

	return (
		<div className="flex justify-center flex-wrap">
			{data.map((o, key) => {
				return (
					<div key={key} className="md:w-1/2 w-full mt-6 pt-2" style={{ padding: "0px 15px" }}>
						<div className="p-6 bg-white testimonial  text-left relative">
							<p className="text-muted">{o.title}</p>
							<h6 className="pt-4 mb-0" dangerouslySetInnerHTML={{ __html: o.author }}></h6>
							<div style={{ right: "45px", bottom: "-15px" }} className="absolute">
								<img style={{ width: "3rem" }} src="/quote-open.svg" />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
