import { MainTitle } from "../interface/description";

export default function MainTitleComponent({ title, subtitle, image }: MainTitle) {
	return (
		<div className="mb-6 pb-2 mx-auto justify-center w-1/2">
			<div className="section-title mb-6 pb-2 relative">
				<div dangerouslySetInnerHTML={{ __html: image }} className="mb-12"></div>
				<h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
				<p className="text-muted mx-auto mb-0 para-desc">{subtitle}</p>
			</div>
		</div>
	);
}
