import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useUserStore from "../hooks/useUserStore";
import login from "../providers/login";

function Login() {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const setUser = useUserStore((state) => state.setUser);
  const loginMutation = useMutation({
    mutationFn: ({ username, password }) => login(username, password),
    onSuccess: (user) => {
      setUser({
        ...user,
        password,
      });
    },
  });

  const handleSubmit = () => {
    loginMutation.mutate({ username, password });
  };

  useEffect(() => {
    if (loginMutation.error) {
      loginMutation.reset();
    }
  }, [username, password]);

  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome back!</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Username"
          placeholder="Your username"
          required
          value={username}
          onChange={handleUsernameChange}
          error={loginMutation.error?.message}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={handlePasswordChange}
          error={loginMutation.error?.message}
        />
        <Button
          fullWidth
          mt="xl"
          onClick={handleSubmit}
          loading={loginMutation.isPending}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;
