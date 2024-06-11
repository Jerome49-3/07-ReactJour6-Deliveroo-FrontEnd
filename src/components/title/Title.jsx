
const Title = (props) => {
  const { title, classTxt } = props;
  return (
    <>
      <h2 className={classTxt}>
        {title}
      </h2>
    </>
  )
}

export default Title