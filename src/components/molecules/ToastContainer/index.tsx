import React from "react";
import { useTransition } from "react-spring";

import Toast from "./Toast";

import { ToastMessage } from "../../../hooks/toast";
import { Container } from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import GlobalStyles from "../../../styles/global";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(messages, {
    from: { top: "-300px", opacity: 0 },
    enter: { top: "40px", opacity: 1 },
    leave: { top: "-300px", opacity: 0 },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        {messagesWithTransition((styles, item) => (
          <Toast key={item.id} message={item} style={styles} />
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default ToastContainer;
