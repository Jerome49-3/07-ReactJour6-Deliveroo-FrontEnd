import Image from "../images/Image"
import Title from '../title/Title'



const Header = (props) => {
  const { classHeader, classWrapper, src, alt, classImg, data, classTxt } = props;
  console.log("classHeader, classWrapper, src, alt, imgHeader in header:", classHeader, classWrapper, src, alt, classImg);
  return (
    <>
      <header className={classHeader}>
        <div className={classWrapper}>
          <div className="top">
            <Image src={src} alt={alt} classImg={classImg} />
          </div>
          <div className="bottom">
            <div className="left">
              <Title title={data?.restaurant.name} classTxt={classTxt} />
              <p>{data?.restaurant.description}</p>
            </div>
            <Image src={data?.restaurant.picture} classImg="imgBanner" />
          </div>
        </div>
        <div>
        </div>
      </header>
    </>
  )
}

export default Header