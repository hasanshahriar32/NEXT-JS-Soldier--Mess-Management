import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div className="h-full w-full flex justify-center flex-col items-center">
      <Image
        height={500}
        width={600}
        src="https://img.lovepik.com/element/40021/7866.png_1200.png"
        alt="404"
      />
      <h1>This is the 404 P</h1>
      <Link href="/">
        <button className="btn w-36 btn-secondary btn-large">
          Navigate to home
        </button>
      </Link>
    </div>
  );
};

export default Page;
