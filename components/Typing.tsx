import Typewriter from "typewriter-effect";

export default function Typing() {
  return (
    <div className="text-center h-8">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Full Stack Engineer</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .typeString('<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Frontend Engineer</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .typeString('<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Backend Engineer</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .typeString('<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Problem Solver</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .typeString('<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Freelancer</span>')
            .pauseFor(3500)
            .deleteAll(17)
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
          cursor: "",
          delay: 17,
        }}
      />
    </div>
  );
}
