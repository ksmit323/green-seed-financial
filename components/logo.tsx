import Image from "next/image";

export default function Logo({ isHome, isFooter, isScrolled, className = "" }: { isHome?: boolean; isFooter?: boolean; isScrolled?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src={(isHome && !isScrolled) || isFooter ? "/logo_white.png" : "/logo_green.png"} 
        alt="Green Seed Financial Logo"
        width={32}
        height={32}
        className="h-10 w-10 transition-all duration-300"
      />
      <span className={`font-bold text-xl transition-all duration-300 ${(isHome && !isScrolled) || isFooter ? "text-white" : "text-green-700"}`}>
        Green Seed Financial
      </span>
    </div>
  );
}
