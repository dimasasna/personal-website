import TrueFocus from "../../blocks/TextAnimations/TrueFocus/TrueFocus";

export default function AboutSection() {
  return (
    <div className="bg-black w-full h-full text-white py-10">
      <div className="flex flex-col justify-center items-center w-3xl mx-auto gap-6">
        <div>
          <TrueFocus
            sentence="ABOUT ME"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
        <div className="font-bold text-2xl text-center">
          Hi there! Im Dimas Asna Nugraha, a passionate about{" "}
          <span className="text-indigo-600 hover:text-white cursor-pointer">
            Fullstack Developer.
          </span>{" "}
          Whether its crafting beautiful{" "}
          <span className="text-indigo-600 hover:text-white cursor-pointer">
            frontend interfaces
          </span>{" "}
          or diving into the complexities of{" "}
          <span className="text-indigo-600 hover:text-white cursor-pointer">
            backend development.
          </span>
        </div>
        <div className="w-full">
          <iframe
            className="rounded-[12px]"
            src="https://open.spotify.com/embed/track/3QaPy1KgI7nu9FJEQUgn6h?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
