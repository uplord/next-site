import Image from 'next/image'
import { ImageProps } from '@/types/section'

export const UtilImage = ({ src, alt, sizes, width, height }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      quality={80}
      priority
      sizes={sizes}
      width={width}
      height={height}
    />
  )
}
