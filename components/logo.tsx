import Image from "next/image";

export default function Logo({ isScrolled, className = "" }: { isScrolled?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src={isScrolled ? "/logo_green.png" : "/logo_white.png"} 
        alt="Green Seed Financial Logo"
        width={32}
        height={32}
        className="h-10 w-10 transition-all duration-300"
      />
      <span className={`font-bold text-xl transition-all duration-300 ${isScrolled ? "text-green-700" : "text-white"}`}>
        Green Seed Financial
      </span>
    </div>
  );
}
