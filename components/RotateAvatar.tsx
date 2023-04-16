import Image from "next/image";
import { useState } from "react";

interface RotateAvatarProps {
  src: string;
}

export const RotateAvatar = ({ src }: RotateAvatarProps) => {
  return (
    <div>
      <Image
        className="rounded-full shadow-md"
        src={src}
        width={"96"}
        height={"96"}
        alt="fuku710 avatar"
      />
    </div>
  );
};
