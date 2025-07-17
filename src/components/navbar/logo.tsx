import Image from "next/image";

function Logo() {
  return (
    <Image 
    src="/furniture-store.webp" 
    alt="Logo" 
    width={35} 
    height={35} 
    className="object-contain" 
    priority
    style={{ width: 'auto', height: 'auto' }}
    />
  )
}

export default Logo;