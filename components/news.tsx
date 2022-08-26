import { useState } from "react";
import { BlogNews } from "../interface/blog";
import { BlogNewsJSON } from "./editData";
export default function News() {
	const [data, setData] = useState<BlogNews[]>(BlogNewsJSON);
	return (
		<div className="flex flex-wrap">
			{data.map((o, key) => {
				return (
					<div key={key} className="md:w-1/3 w-full pb-8 px-3">
						<div className="rounded-[3px] bg-[#f8f9fa] p-6 text-left h-full">
							<p>{o.smallTitle}</p>
							<h5>
								<a href="#" className="text-dark">
									{o.title}
								</a>
							</h5>
							<p className="mt-3 text-muted">{o.subTitle}</p>
							<div className="pt-4">
								<a href="#" style={{ color: "#ff9800" }} className="text-custom flex items-center">
									Read more
									<span className="ml-2">
										<img style={{ width: "0.8rem" }} src="/right-arrow.svg" />
									</span>
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
