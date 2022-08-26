import { useEffect, useState } from "react";
import { Services } from "../interface/services";
import { ServicesJSON } from "./editData";
export default function ServicesComponent() {
	const [data, setData] = useState<Services[]>(ServicesJSON);
	return (
		<div className="flex flex-wrap">
			{data.map((o, key) => {
				return (
					<div key={key} style={{ padding: "0px 15px" }} className="md:w-1/3 w-full">
						<div className="services-flip-box relative mt-6 pt-2">
							<div className="front p-12">
								<h5 className="mb-3">{o.title}</h5>
								<p className="text-muted mb-0">{o.subTitle}</p>
							</div>
							<div className="back p-12 flex justify-center items-center">
								<img style={{ width: "6rem" }} src="/colors-pallete.svg" />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
