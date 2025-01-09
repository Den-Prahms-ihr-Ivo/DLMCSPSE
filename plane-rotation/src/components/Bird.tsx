import { Avatar, AvatarBadge, Icon, Stack } from "@chakra-ui/react";
import { FaXmark } from "react-icons/fa6";
import { colourSystem } from "../theme";

interface Props {
  avatar: string;
  isSelected: boolean;
  highlightColor: string;
  onDelete: () => void;
  onSelect: () => void;
}

const Bird = ({
  avatar,
  isSelected,
  onDelete,
  onSelect,
  highlightColor,
}: Props) => {
  let border = isSelected ? "3px solid " + highlightColor : "";

  return (
    <Avatar
      //width={avatarWidth}
      //height={avatarHeight}
      size="lg"
      src={avatar}
      border={border}
      cursor="pointer"
      onClick={onSelect}
      margin={2}
    >
      <AvatarBadge
        cursor="pointer"
        borderColor={colourSystem.Background.foreground}
        bg={highlightColor}
        boxSize="1.25em"
      >
        <Icon as={FaXmark} onClick={onDelete} />
      </AvatarBadge>
    </Avatar>
  );
};

export default Bird;
