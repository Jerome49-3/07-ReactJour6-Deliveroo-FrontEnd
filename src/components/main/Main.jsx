/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from "react";
import Title from "../title/Title";
import Image from "../../components/images/Image";
import Quantity from "../counter/Quantity";
import Price from "../price/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { v4 as uuidv4 } from 'uuid';
// import handleAddCaddy from "../../assets/lib/handleClick/handleAddCaddy";
// import axios from "axios";
import { useStateContext } from "../../assets/lib/utils/useStateContext";

const Main = ({ data, faStar }) => {
  const { state, dispatch } = useStateContext();
  // console.log("%cdata in Main:", "color: yellow", data);
  //convention de nommage pour le panier:
  // const [cart, setCart] = useState([]);
  // console.log("%cstate in Main:", "color: orange", state);

  //je crée un nouveau tableau de panier
  return (
    <main>
      <section className="wrapperMain">
        <div className="left">
          <div className="boxPlats">
            {data?.categories.map((category) => {
              // console.log("%ccategory:", "color: orange", category);
              const nameCategory = category.name;
              // console.log("nameCategory:", nameCategory);
              // console.log('data?.categories?.meals?.length:', repas?.meals?.length);
              if (category?.meals?.length !== 0) {
                return (
                  <Fragment key={category._id}>
                    <div>
                      <Title title={category.name} classTxt="titleCateg" />
                    </div>
                    <div className="boxCards">
                      {category.meals.map((menus) => {
                        // console.log("%cmenus:", "color: orange", menus);
                        return (
                          <article
                            key={menus.id}
                            className="card"
                            onClick={() =>
                              dispatch({
                                type: "addedPanier",
                                newPanier: {
                                  idMeal: menus.id,
                                  title: menus.title,
                                  defaultPrice: menus.price,
                                  quantity:
                                    menus.quantity === 0 ? 1 : menus.quantity,
                                  categories: nameCategory,
                                },
                              })
                            }
                          >
                            <div className="left">
                              <Title title={menus.title} classTxt="titleCard" />
                              <p></p>
                              <div className="footerCard">
                                <p>{menus.description}</p>
                                <div className="footerCardBottom">
                                  <p>{menus.price} €</p>
                                  {menus.popular === true ? (
                                    <FontAwesomeIcon icon={faStar} />
                                  ) : (
                                    <p></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="right">
                              {menus.picture ? (
                                <Image src={menus.picture} />
                              ) : (
                                <div></div>
                              )}
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </Fragment>
                );
              }
            })}
          </div>
        </div>
        <aside>
          <article className="panier">
            <h3>Valider mon panier</h3>
            <div className="shoppingContainer">
              {state?.length > 0 && (
                <div className="boxTitles">
                  <span>Quantity</span>
                  <span>Plats</span>
                  <span>Price</span>
                </div>
              )}
              {state?.length !== 0 ? (
                <>
                  {state?.map((elPanier, index) => {
                    console.log(
                      "%celPanier in Main:",
                      "color: orange",
                      elPanier
                    );
                    const elPanierId = elPanier?.idMeal;
                    return (
                      <div key={index} className="shoppingCard">
                        <div className="elShoppingCard">
                          <span>
                            {" "}
                            <Quantity
                              elPanier={elPanier}
                              state={state}
                              dispatch={dispatch}
                              elPanierId={elPanierId}
                              index={index}
                            />
                          </span>
                          <span>{elPanier?.title}</span>
                          <Price elPanier={elPanier} />
                        </div>
                        {elPanier?.message && elPanier?.quantity === 10 && (
                          <div className="red">{elPanier.message}</div>
                        )}
                      </div>
                    );
                  })}
                </>
              ) : (
                <div>Le panier est vide</div>
              )}
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
};

export default Main;
