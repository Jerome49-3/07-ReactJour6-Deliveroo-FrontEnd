import Title from '../title/Title';
import Image from '../../components/images/Image';
import { useState } from 'react';

const Main = ({ data }) => {
  const [panier, setPanier] = useState([]);
  //je crée un nouveau tableau de panier                         
  const panierClone = [...panier];
  console.log('panierClone', panierClone);
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <main>
        <section className='wrapperMain'>
          <div className='left'>
            <div className="boxPlats">
              {data?.categories.map((repas, index) => {
                console.log('data?.categories?.meals?.length:', repas?.meals?.length);
                if (repas?.meals?.length !== 0) {
                  return (
                    <>
                      <div key={index}>
                        <Title title={repas.name} classTxt='titleCateg' />
                      </div>
                      <div className="boxCards">
                        {repas.meals.map((menus, key = menus.id) => {
                          console.log('menus:', menus);
                          return (
                            <>
                              <article key={key} className='card' onClick={() => {
                                //au clic, je defini la nouvelle valeur de panier en faisant un push des objects menus
                                {
                                  repas.meals.map((menu, key = menu.id) => {
                                    console.log('menu', menu);
                                    setPanier(panierClone.push({ id: menu.id, title: menu.title, price: menu.price }))
                                  })
                                }
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
                {/* {data?.categories.map((repas, index) => {
                  // console.log('repas in aside:', repas);
                })} */}
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