import { Paper, PasswordInput, Select, Tabs, TextInput } from "@mantine/core";
import { useState } from "react";
import useUserStore from "../../hooks/useUserStore";
import "./User.css";

function User() {
  const user = useUserStore((state) => state.user);
  const { username, password } = user;

  const [dropdownOpened, setDropdownOpened] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpened((open) => !open);
  };

  const renderSelectOption = ({ option }) => {
    if (option.value === "tabs") {
      return (
        <Tabs defaultValue="version" className="tabs">
          <Tabs.List grow>
            <Tabs.Tab value="version">Version</Tabs.Tab>
            <Tabs.Tab value="currentUser">Current User</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="version" className="tab-content">
            version: 0.0.1
          </Tabs.Panel>
          <Tabs.Panel value="currentUser" className="tab-content">
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <TextInput label="Username" value={username} readOnly />
              <PasswordInput
                label="Password"
                mt="md"
                value={password}
                readOnly
              />
            </Paper>
          </Tabs.Panel>
        </Tabs>
      );
    }

    return null;
  };

  return (
    <div className="page-container">
      <Select
        classNames={{ options: "select-options" }}
        label="Functions"
        placeholder="Click to toggle dropdown"
        data={["tabs"]}
        renderOption={renderSelectOption}
        dropdownOpened={dropdownOpened}
        onClick={toggleDropdown}
      />
    </div>
  );
}

export default User;
