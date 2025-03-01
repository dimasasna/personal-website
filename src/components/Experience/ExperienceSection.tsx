
import TrueFocus from "../../blocks/TextAnimations/TrueFocus/TrueFocus";
import TimelineCard from "./TimelineComponent/TimelineCard";


export default function ExperienceSection() {
  return (
    <div className="bg-black text-white py-20 relative overflow-hidden">
      <div className="relative h-full w-full ">
        {/* Gradient 1 */}
        <div className="absolute bottom-0 left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        {/* Gradient 2 */}
        <div className="absolute bottom-[-10%] right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
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
