/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect } from "react";
import { FiXCircle } from "react-icons/fi";

import { Container, ContainerIcon, ContainerRight } from "./styles";

import { ToastMessage, useToast } from "../../../../hooks/toast";
import { ReactSVG } from "react-svg";
import { ThemeProvider } from "styled-components";
import theme from "../../../../styles/theme";
import GlobalStyles from "../../../../styles/global";

interface ToastProps {
  message: ToastMessage;
  style: any;
}

const icons = {
  info: "/icons/mai-ic-info.svg",
  error: "/icons/mai-ic-danger.svg",
  success: "/icons/mai-ic-success.svg",
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, message.duration);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container
        type={message.type}
        hasDescription={!!message.description}
        style={style}
      >
        <ContainerIcon>
          <ReactSVG src={icons[message.type!]} />
        </ContainerIcon>

        <ContainerRight>
          <div>
            <p>{message.title}</p>
          </div>

          <button onClick={() => removeToast(message.id)} type="button">
            <FiXCircle size={18} color="#fff" />
          </button>
        </ContainerRight>
      </Container>
    </ThemeProvider>
  );
};

export default Toast;
