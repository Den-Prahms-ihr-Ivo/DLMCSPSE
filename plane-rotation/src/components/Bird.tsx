import { Avatar, AvatarBadge, Icon, Stack } from "@chakra-ui/react";
import { FaXmark } from "react-icons/fa6";
import { colourSystem } from "../theme";

interface Props {
  avatar: string;
  isSelected: boolean;
}

const Bird = ({ avatar, isSelected }: Props) => {
  let border = isSelected ? "3px solid " + colourSystem.Accent.accent_1 : "";

  return (
    <Avatar src={avatar} border={border}>
      <AvatarBadge
        cursor="pointer"
        borderColor={colourSystem.Background.foreground}
        bg={colourSystem.Accent.accent_2}
        boxSize="1.25em"
      >
        <Icon as={FaXmark} />
      </AvatarBadge>
    </Avatar>
  );
};

export default Bird;
