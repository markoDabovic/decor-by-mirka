import {
  Lightbulb,
  Gift,
  Sparkles,
  UserRoundCog,
  ArrowRight,
} from "lucide-react";

function Steps() {
  return (
    <div className="max-w-5xl mx-auto my-20 px-4">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center">
        <Step1 />
        <Arrow className="arrow1" />
        <Step2 />
        <Arrow className="arrow2" />
        <Step3 />
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="flex flex-col items-center">
      <div className="circle step1">
        <Lightbulb className="bulb-icon" />
      </div>
      <p className="mt-3">Ideja</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="flex flex-col items-center">
      <div className="circle step2">
        <UserRoundCog className="text-pink-500" />
      </div>
      <p className="mt-3">Izrada</p>
    </div>
  );
}

function Step3() {
  return (
    <div className="flex flex-col items-center relative m-auto">
      <div className="circle">
        <Gift className="text-pink-500" />
        <Sparkles className="confetti confetti1 text-yellow-400" size={24} />
        <Sparkles className="confetti confetti2 text-yellow-400" size={17} />
      </div>

      {/* KONFETE (bliže ikonici) */}

      <p className="mt-3">Poklon</p>
    </div>
  );
}

function Arrow({ className }) {
  return (
    <div className="flex items-center justify-center mb-6">
      <ArrowRight
        className={`text-pink-400 opacity-0 ${className}`}
        size={28}
      />
    </div>
  );
}

export default Steps;
