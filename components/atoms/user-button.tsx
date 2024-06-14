import { Avatar, Group, UnstyledButton } from "@mantine/core";
import { IconBaselineDensityMedium } from "@tabler/icons-react";
import styles from './user-button.module.scss'
import { forwardRef } from "react";

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      {...others}
    >
      <Group className={styles.userbutton}>
        <IconBaselineDensityMedium size={20} stroke={2} />
        <Avatar src={image} radius="xl" />
      </Group>
    </UnstyledButton>
  )
);

export default UserButton