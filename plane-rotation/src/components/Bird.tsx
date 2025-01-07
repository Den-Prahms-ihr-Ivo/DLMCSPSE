import { Avatar, AvatarBadge, Icon, Stack } from "@chakra-ui/react";
import { FaXmark } from "react-icons/fa6";
import { colourSystem } from "../theme";

interface Props {
  avatar: string;
  isSelected: boolean;
  onDelete: () => void;
  onSelect: () => void;
}

const Bird = ({ avatar, isSelected, onDelete, onSelect }: Props) => {
  let border = isSelected ? "3px solid " + colourSystem.Accent.accent_1 : "";

  return (
    <Avatar src={avatar} border={border} cursor="pointer" onClick={onSelect}>
      <AvatarBadge
        cursor="pointer"
        borderColor={colourSystem.Background.foreground}
        bg={colourSystem.Text.secondary}
        boxSize="1.25em"
      >
        <Icon as={FaXmark} onClick={onDelete} />
      </AvatarBadge>
    </Avatar>
  );
};

export default Bird;
