import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, href, children, ...props }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display={"flex"} alignItems={"center"} {...props}>
        <Icon as={icon} fontSize={"28"} />
        <Text ml={"4"} fontWeight={"medium"}>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
