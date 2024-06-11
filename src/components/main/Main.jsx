import Title from '../title/Title';
import Image from '../../components/images/Image';
import { useState } from 'react';

const Main = ({ data }) => {
  const [panier, setPanier] = useState([0]);
  const [quantity, setQuantity] = useState(0);
  const categ = data?.categories;
  const plats = categ?.meals;
  // const [pop, setPop] = useState(false);
  console.log('plats:', plats);
  // console.log('categ:', categ);
  return (
    <>
      <main>
        <section className='wrapperMain'>
          <div className='left'>
            <div className="boxPlats">
              {categ.map((repas, index) => {
                // console.log('repas:', repas);
                if (categ.length !== 0) {
                  console.log('repas.length:', categ.length);
                  return (
                    <>
                      <Title title={repas.name} classTxt='titleCateg' />
                      <div className="boxCards">
                        {repas.meals.map((menus, key = menus.id) => {
                          // console.log('menus:', menus);
                          return (
                            <>
                              <article key={key} className='card' onClick={() => {
                                const panierClone = [...panier];
                                setPanier(panierClone.push(menus))
                                console.log('panierClone', panierClone);
                              }}>
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
                {console.log('categ:', categ)}
                {categ.map((repas, index) => {
                  console.log('categ in aside:', categ);
                })}
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