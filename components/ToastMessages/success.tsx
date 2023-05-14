import Toast from "react-native-toast-message";

export const paymentSeccess = () => {
  const payemDone = () => {
    Toast.show({
      type: "success",
      text1: ` Has been added to your cart.`,
      text2: `View Your cart `,
      position: "top",
      autoHide: true,
      topOffset: 40,
      bottomOffset: 90,
    });
  };
  payemDone();
};
