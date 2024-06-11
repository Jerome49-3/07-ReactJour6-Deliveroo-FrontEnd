import Title from '../title/Title'
import Image from '../../components/images/Image'

const Main = ({ data, classMain, classTxt }) => {
  const rests = data?.restaurant;
  const categ = data?.categories;
  // const [pop, setPop] = useState(false);
  // console.log('rests:', rests);
  // console.log('categ:', categ);
  return (
    <>
      <main>
        <section className={classMain}>
          <div>
            <Title title={rests.name} classTxt={classTxt} />
            <p>{rests.description}</p>
          </div>
          <Image src={rests.picture} classImg="imgBanner" />
        </section>
        <section className='bouffe'>
          <section className='wrapper'>
            <div className="boxPlats">
              {categ.map((repas, index) => {
                // console.log('repas:', repas);
                if (repas.length !== 0) {
                  return (
                    <section>
                      <Title title={repas.name} classTxt='titleCateg' />
                      <div className="boxCards">
                        {repas.meals.map((menus, key = menus.id) => {
                          console.log('menus:', menus);
                          return (
                            <>
                              <article key={key} className='card'>
                                <div className="left">
                                  <Title title={menus.title} classTxt="titleCard" />
                                  <p></p>
                                  <div className="footerCard">
                                    <p>{menus.description}</p>
                                    <div>
                                      <p>{menus.price}</p>
                                      {menus.populaire === true ? <div>star</div> : <div></div>}
                                    </div>
                                  </div>
                                </div>
                                <div className="right">
                                  {menus.picture ? <Image src={menus.picture} /> : <div></div>}
                                </div>
                              </article>
                            </>
                          )
                        })}
                      </div>
                    </section>
                  )
                }
              })}
            </div>
          </section>
          <aside>
            <article className='panier'>
              <h3>Valider mon panier</h3>
              <div>
                <p>votre panier est vide</p>
              </div>
            </article>
          </aside>
        </section>
      </main>
    </>
  )
}

export default Main