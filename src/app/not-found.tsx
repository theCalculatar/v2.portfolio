import RoundEdges from "@/components/RoundEdges";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pb-50 px-4 rounded-b-2xl pt-60 flex justify-center items-center bg-card-background">
      <div className="max-h-80 sm:max-h-126 sm:max-w-126 w-full relative rounded-2xl overflow-hidden -mt-20">
        <RoundEdges
          className="px-4 bg-background"
          tr_0
          bl_1
          __className="absolute top-0 left-0"
        >
          <div className="flex items-center gap-2">
            <ArrowLeft width={15} height={15} />
            <Link href={"/"}>Go Home</Link>
          </div>
        </RoundEdges>
        <Image
          src={"/images/404.png"}
          width={300}
          height={300}
          priority
          className="w-full h-full object-bottom"
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt="not foind image"
        ></Image>
        <RoundEdges
          className="px-4 bg-background"
          __className="absolute bottom-0 right-0"
          tr_1
          bl_0
        >
          <Link href={"/"} className="">
            Not found
          </Link>
        </RoundEdges>
      </div>
    </div>
  );
}
