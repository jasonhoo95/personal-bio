import Typewriter from "typewriter-effect";

export default function TypeWriterEffect() {
	return (
		<div>
			<Typewriter
				options={{
					strings: ["Hello", "World"],
					wrapperClassName: "typeWriter",
					cursorClassName: "cursorType",
					autoStart: true,
					loop: true,
				}}
			/>
		</div>
	);
}
