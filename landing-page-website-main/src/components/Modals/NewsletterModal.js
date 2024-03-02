import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UrlAPI from "../../utils/UrlAPI";

const NewsletterModal = () => {
  let [email, setEmail] = useState("");
  let [nom, setNom] = useState("");
  let [prenom, setPrenom] = useState("");
  let navigate = useNavigate();

  // handle add newsletter
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !nom || !prenom) {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Veuillez remplir tous les champs",
      });
    } else {
      const member = {
        email: email,
        fname: nom,
        lname: prenom,
      };
      axios
        .post(UrlAPI.addMembers, member)
        .then((res) => {
          if (res.data === "success") {
            Swal.fire({
              icon: "success",
              title: "Merci pour votre inscription",
              text: "Votre inscription a bien été prise en compte. Veuillez noter que notre mail de bienvenue devrait arriver dans votre boîte de réception sous peu. Si vous ne le voyez pas dans votre boîte de réception principale, veuillez vérifier votre dossier de courrier indésirable ou de spam. Si vous trouvez notre mail de bienvenue dans ce dossier, n'oubliez pas de le marquer comme non-spam pour vous assurer de recevoir toutes nos communications importantes.",
              confirmButtonColor: "#135DDF",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate(0);
              }
            });
          } else if (res.data === "exist") {
            Swal.fire({
              icon: "info",
              title: "Vous étes déjà abonné",
              text: "Vous étes déjà abonné à notre newsletter. Merci !",
              confirmButtonColor: "#135DDF",
              confirmButtonText: "OK",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Une erreur s'est produite. Veuillez réessayer.",
              confirmButtonColor: "#135DDF",
              confirmButtonText: "OK",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Newsletter
              </h5>
              <button
                type="button"
                className="close btn-close hover-opacity"
                data-dismiss="modal"
                aria-label="Close"
              >
              </button>
            </div>
            <form method="post" action="#" onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row">
                  <label htmlFor="fullname" className="mb-2">
                    Nom complet <span className="text-danger">*</span>
                  </label>
                  <div className="col mb-4">
                    <input
                      type="text"
                      className="form-control rounded-4"
                      placeholder="Nom"
                      id="fullname"
                      onChange={(e) => {
                        setNom((nom = e.target.value));
                      }}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control rounded-4"
                      placeholder="Prénom"
                      onChange={(e) => {
                        setPrenom((prenom = e.target.value));
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="mb-2">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-4"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Votre adresse email"
                    onChange={(e) => {
                      setEmail((email = e.target.value));
                    }}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsletterModal;

// STYLED COMPONENTS
const Container = styled.div`
  .hover-opacity{

    border: 2px solid red;
    border-radius: 50%;
    padding: 8px;
    font-size: 11px;

    &:hover {
        transition: ease-out 0.3s;
        -webkit-transition: ease-out 0.3s;
        -moz-transition: ease-out 0.3s;
        -ms-transition: ease-out 0.3s;
        -o-transition: ease-out 0.3s;
    }
  }
`;
