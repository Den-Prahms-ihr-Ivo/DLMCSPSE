import { Avatar, AvatarBadge, Icon, Stack, Tooltip } from "@chakra-ui/react";
import { FaXmark } from "react-icons/fa6";
import { colourSystem } from "../theme";

interface Props {
  avatar: string;
  isSelected: boolean;
  highlightColor: string;
  onDelete: () => void;
  onSelect: () => void;
  birdName?: string;
}

const Bird = ({
  avatar,
  isSelected,
  onDelete,
  onSelect,
  highlightColor,
  birdName,
}: Props) => {
  return (
    <Tooltip
      hasArrow
      label={birdName ? birdName : ""}
      bg={highlightColor}
      placement="top"
    >
      <Avatar
        //width={avatarWidth}
        //height={avatarHeight}
        size="lg"
        src={avatar}
        border={isSelected ? "3px solid " + highlightColor : ""}
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
    </Tooltip>
  );
};

export default Bird;
