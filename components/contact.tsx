import { ContactMainJSON } from "./editData";
import MainTitleComponent from "./mainTitle";

export default function Contact() {
	return (
		<>
			<MainTitleComponent {...ContactMainJSON} />

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
				<div className="flex justify-end px-4">
					<div className="text-right">
						<input type="submit" id="submit" name="send" className="btn-submit cursor-pointer" value="Send Message" />
					</div>
				</div>
			</form>
		</>
	);
}
