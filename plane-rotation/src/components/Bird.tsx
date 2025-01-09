import { Avatar, AvatarBadge, Icon, Stack } from "@chakra-ui/react";
import { FaXmark } from "react-icons/fa6";
import { colourSystem } from "../theme";

interface Props {
  avatar: string;
  isSelected: boolean;
  highlightColor: string;
  onDelete: () => void;
  onSelect: () => void;
  avatarWidth?: string;
  avatarHeight?: string;
}

const Bird = ({
  avatar,
  isSelected,
  onDelete,
  onSelect,
  highlightColor,
  avatarWidth,
  avatarHeight,
}: Props) => {
  let border = isSelected ? "3px solid " + highlightColor : "";

  avatarWidth = avatarWidth ? avatarWidth : "60px"; // "48px"
  avatarHeight = avatarHeight ? avatarHeight : "60px";

  return (
    <Avatar
      width={avatarWidth}
      height={avatarHeight}
      src={avatar}
      border={border}
      cursor="pointer"
      onClick={onSelect}
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
