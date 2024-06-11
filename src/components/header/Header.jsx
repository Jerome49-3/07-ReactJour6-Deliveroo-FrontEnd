import Image from "../images/Image"



const Header = (props) => {
  const { classHeader, classWrapper, src, alt, classImg } = props;
  console.log("classHeader, classWrapper, src, alt, imgHeader in header:", classHeader, classWrapper, src, alt, classImg);
  return (
    <>
      <header className={classHeader}>
        <div className={classWrapper}>
          <Image src={src} alt={alt} classImg={classImg} />
        </div>
      </header>
    </>
  )
}

export default Header