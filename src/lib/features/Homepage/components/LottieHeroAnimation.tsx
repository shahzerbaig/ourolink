import Lottie, { LottieProps, Options } from "react-lottie";
import animationData from "@assets/lotties/cubes_rotate_lottie.json";

interface LottieHeroAnimationProps {
  width: string;
}

const LottieHeroAnimation = (props: LottieHeroAnimationProps) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width={props.width} />;
};

export default LottieHeroAnimation;
