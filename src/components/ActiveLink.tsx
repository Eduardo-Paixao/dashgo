import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, cloneElement } from "react";
interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}
export const ActiveLink = ({ children, ...props }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  return (
    <Link {...props}>
      {cloneElement(children, {
        color: asPath === props.href || asPath.startsWith(String(props.href))? "pink.400" : "gray.50",
      })}
    </Link>
  );
};
