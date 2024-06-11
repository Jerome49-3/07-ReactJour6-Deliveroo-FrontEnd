import Title from '../title/Title';
import Image from '../../components/images/Image';

const Main = ({ data, classMain, classTxt }) => {
  const rests = data?.restaurant;
  const categ = data?.categories;
  // const [pop, setPop] = useState(false);
  // console.log('rests:', rests);
  // console.log('categ:', categ);
  return (
    <>
      <main>
        <section className='wrapperMain'>
          <div className='left'>
            <div className="boxPlats">
              {categ.map((repas, index) => {
                // console.log('repas:', repas);
                if (repas.length !== 0) {
                  return (
                    <>
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
                                    <div className='footerCardBottom'>
                                      <p>{menus.price} €</p>
                                      {menus.popular === true ? <p>star</p> : <p></p>}
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
                    </>
                  )
                }
              })}
            </div>
          </div>
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
      {/* <section className='bouffe'>
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
                                    <div className='footerCardBottom'>
                                      <p>{menus.price} €</p>
                                      {menus.popular === true ? <p>star</p> : <div></div>}
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
        </section>
        <aside>
          <article className='panier'>
            <h3>Valider mon panier</h3>
            <div>
              <p>votre panier est vide</p>
            </div>
          </article>
        </aside> */}
    </>
  )
}

export default Main