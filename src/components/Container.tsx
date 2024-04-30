import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container(props: IContainerProps) {
  return (
    <main className={twMerge(" min-h-screen container", props.className)}>
      {props.children}
    </main>
  );
}
