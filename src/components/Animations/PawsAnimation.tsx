import { useLottie } from 'lottie-react'

import paws from '../../assets/lottieAnimation/pawsAnimation.json'

export default function PawsAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: paws,
  }

  const style = {
    width: 150,
    height: 150,
  }

  const { View } = useLottie(defaultOptions, style)

  return <div className="flex items-center justify-center">{View}</div>
}
