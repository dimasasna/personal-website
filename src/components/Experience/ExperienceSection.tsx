
import TrueFocus from "../../blocks/TextAnimations/TrueFocus/TrueFocus";
import TimelineCard from "./TimelineComponent/TimelineCard";

export default function ExperienceSection() {
  return (
    <div className="bg-black text-white py-20">
      <div className="">
        <div data-aos="fade-down">
          <TrueFocus
            data-aos="fade-down"
            sentence="MY EXPERIENCE"
            manualMode={false}
            blurAmount={5}
            borderColor="gray"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>

        <div className="w-full px-40 mt-10">
          <TimelineCard />
        </div>
      </div>
    </div>
  );
}
