"use client";

import { FC, forwardRef, useState } from "react";
import { IconBaselineDensityMedium } from "@tabler/icons-react";
import {
  Group,
  Avatar,
  Text,
  Menu,
  Input,
  UnstyledButton,
  rem,
  Modal,
} from "@mantine/core";
import { IconAt, IconKey } from '@tabler/icons-react';

import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import UserButton from "../atoms/user-button";

const ProfileDropdown: FC = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div>
      <Menu withArrow>
        <Menu.Target>
          <UserButton
            image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            name="Harriette Spoonlicker"
            email="hspoonlicker@outlook.com"
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            onClick={() => setShowAuth((prev) => !prev)}
            leftSection={
              <IconSettings style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Login
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            leftSection={
              <IconArrowsLeftRight
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            Transfer my data
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Modal
        opened={showAuth}
        onClose={() => setShowAuth((prev) => !prev)}
        centered
      >
        <div>
          <h1 className="text-center mb-5">Welcome To Airbnb</h1>
          <div className="flex gap-3 flex-col">
            <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
            <Input placeholder="Your email" leftSection={<IconKey size={16} />} />
            <button className="bg-[#e41d59] text-white py-2 rounded-md">Login</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileDropdown;
