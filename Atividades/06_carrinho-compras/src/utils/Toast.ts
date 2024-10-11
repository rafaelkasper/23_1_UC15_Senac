import Toast from "react-native-root-toast";

const defaultOptions = {
  duration: Toast.durations.LONG,
  position: Toast.positions.BOTTOM,
  shadow: true,
  animation: true,
  hideOnPress: true,
  backgroundColor: "#000",
  textColor: "#fff",
  opacity: 1,
  delay: 0,
};

export const showError = (message: string) => {
  defaultOptions.backgroundColor = "#cc0000";

  Toast.show(message, defaultOptions);
};

export const showSuccess = (message: string) => {
  defaultOptions.backgroundColor = "#28a745";

  Toast.show(message, defaultOptions);
};

export const showWarning = (message: string) => {
  defaultOptions.backgroundColor = "#ffc107";
  defaultOptions.textColor = "#252525";

  Toast.show(message, defaultOptions);
};
