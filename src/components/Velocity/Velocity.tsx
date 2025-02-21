import ScrollVelocity from "../../blocks/TextAnimations/ScrollVelocity/ScrollVelocity";

export default function Velocity() {
  return (
    <div className="w-full h-[150px] bg-black text-nowrap flex-nowrap text-white">
      <ScrollVelocity
        texts={[ "FULLSTACK DEVELOPER", "WEB DEVELOPMENT"]}
        velocity={100}
        className="custom-scroll-text italic"
      />
    </div>
  );
}
