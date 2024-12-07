
"use client";
import Image from "next/image";

function Achievement() {
  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        My Achievements
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <Image
              src="/image/hackathon-winner.jpg"
              alt="Hackathon Winner"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#d3d8e8]">
              Hackathon Winner
            </h2>
            <p className="text-sm text-[#d3d8e8] mt-3">
              I had the privilege of winning a prestigious hackathon held in Kanpur. The event provided an incredible platform to showcase my problem-solving skills and collaborative efforts in creating innovative solutions.
            </p>
            <p className="text-sm text-[#d3d8e8] mt-2">
              This achievement highlights my dedication to technology, teamwork, and creativity, as well as my passion for overcoming challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
