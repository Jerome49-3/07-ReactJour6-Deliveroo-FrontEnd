import Title from "../title/Title";
import Image from "../../components/images/Image";
import Quantity from "../counter/Quantity";
import Price from "../price/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { v4 as uuidv4 } from 'uuid';
import handleAddCaddy from "../../assets/lib/handleClick/handleAddCaddy";

const Main = ({ data, panier, setPanier, faStar }) => {
  //convention de nommage pour le panier:
  // const [cart, setCart] = useState([]);
  console.log("%cPanier:", "color: yellow", panier);
  //je crée un nouveau tableau de panier
  return (
    <main>
      <section className="wrapperMain">
        <div className="left">
          <div className="boxPlats">
            {data?.categories.map((repas, index) => {
              // console.log('data?.categories?.meals?.length:', repas?.meals?.length);
              if (repas?.meals?.length !== 0) {
                return (
                  <>
                    <div key={index}>
                      <Title title={repas.name} classTxt="titleCateg" />
                    </div>
                    <div className="boxCards">
                      {repas.meals.map((menus, key = menus.id) => {
                        // console.log('menus:', menus);
                        return (
                          <>
                            <article
                              key={key}
                              className="card"
                              onClick={(e) =>
                                handleAddCaddy(e, panier, menus, setPanier)
                              }
                            >
                              {/* {console.log('panier after on click:', panier)} */}
                              <div className="left">
                                <Title
                                  title={menus.title}
                                  classTxt="titleCard"
                                />
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
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
        <aside>
          <article className="panier">
            <h3>Valider mon panier</h3>
            <div className="shoppingContainer">
              {panier.length > 0 && (
                <div className="boxTitles">
                  <span>Plats</span>
                  <span>Price</span>
                  <span>Quantity</span>
                </div>
              )}
              {/* {console.log('panier on aside', panier)} */}
              {panier?.length !== 0 ? (
                <>
                  {panier?.map((repas, key = repas.id) => {
                    {
                      console.log(
                        "repas.id in aside:",
                        "\n",
                        repas.id,
                        "\n",
                        "repas.title in aside:",
                        repas.title,
                        "\n",
                        "repas.price in aside:",
                        repas.price
                      );
                    }
                    return (
                      <div key={key} className="shoppingCard">
                        {/* <div>{repas.id}</div> */}
                        <span>{repas?.title}</span>
                        <Price repas={repas} />
                        <span>
                          {" "}
                          <Quantity />
                        </span>
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
