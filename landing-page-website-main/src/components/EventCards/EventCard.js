import React, { useState, useEffect } from "react";
import Title from "./Title";
import styled from "styled-components";
import UrlAPI from "../../utils/UrlAPI";
import axios from "axios";
import SliderCard from "./SliderCard";
import SliderLoader from "./SliderLoader";

const EventCard = () => {
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const loaderData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSearch = () => {
    setOptions([]);
    if (searchText) {
      axios
        .post(UrlAPI.getEvents, { target: "event", nameEvent: searchText })
        .then((response) => {
          if (response.data.events.length > 0) {
            for (let i = 0; i < response.data.events.length; i++) {
              setOptions((prevState) => {
                return [
                  ...prevState,
                  {
                    main: response.data.events[i].biware_name,
                    sub: response.data.events[i].biware_description,
                    image_url: response.data.events[i].biware_image_url,
                    background: response.data.images[i]["$content"],
                    date_event: response.data.events[i].biware_datedelevenement,
                    type_event:
                      response.data.events[i][
                        "biware_typedevenement@OData.Community.Display.V1.FormattedValue"
                      ],
                    lien_event: response.data.events[i].biware_liendelevenement,
                    statut_event:
                      response.data.events[i][
                        "biware_statutdelevenement@OData.Community.Display.V1.FormattedValue"
                      ],
                  },
                ];
              });
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getData();
    }
  };

  const getData = () => {
    axios
      .post(UrlAPI.getEvents, {
        target: "all",
        nameEvent: "",
      })
      .then((response) => {
        if (response.data.events.length > 0) {
          for (let i = 0; i < response.data.events.length; i++) {
            setOptions((prevState) => {
              return [
                ...prevState,
                {
                  main: response.data.events[i].biware_name,
                  sub: response.data.events[i].biware_description,
                  image_url: response.data.events[i].biware_image_url,
                  background: response.data.images[i]["$content"],
                  date_event: response.data.events[i].biware_datedelevenement,
                  type_event:
                    response.data.events[i][
                      "biware_typedevenement@OData.Community.Display.V1.FormattedValue"
                    ],
                  lien_event: response.data.events[i].biware_liendelevenement,
                  statut_event:
                    response.data.events[i][
                      "biware_statutdelevenement@OData.Community.Display.V1.FormattedValue"
                    ],
                },
              ];
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <EventSection id="events">
      <MainTitle>
        <h1>
          <span className="thin">Jetez un coup d'œil sur</span> Nos évènements
        </h1>
        <SearchBar>
          <input
            type="text"
            placeholder="Saissez un évènement..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchButton onClick={() => handleSearch()}>Chercher</SearchButton>
        </SearchBar>
      </MainTitle>
      <EventCardContainer>
        <div className="d-flex sliderBox">
          <div className="col-md-3 col-sm-12">
            <Title
              title="Nos Derniers Événements"
              subtitle="les derniers événements de synapse HR"
            />
          </div>

          <div className="col-md-9 col-sm-12 center">
            {options.length === 0 ? (
              <SliderLoader loaderData={loaderData} />
            ) : (
              <SliderCard options={options} />
            )}
          </div>
        </div>
      </EventCardContainer>
    </EventSection>
  );
};

const EventSection = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  /* Styles for event section */
  h1.main-title {
    color: #135ddf;
    text-align: center;
  }
`;

const MainTitle = styled.div`
  padding-bottom: 40px;
  h1 {
    /* Styles for main title */
    color: #135ddf;
    text-align: center;
    span.thin {
      font-family: Montserrat, sans-serif;
      font-weight: 200;
    }
  }
  @media screen and (max-width: 500px){
    h1{
      font-size: 25px;
    }
  }
`;

const EventCardContainer = styled.div`
  /* Styles for event card container */
  .col-md-3 {
    @media screen and (max-width: 798px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .sliderBox {
    @media screen and (max-width: 798px) {
      flex-direction: column;
      .col-md-3 {
        width: 30%;
        margin: auto;

        .app-title-content {
          left: 80px;
          top: -50px;
          width: 154%;
        }
      }
    }

    @media screen and (max-width: 500px) {
      .col-md-3 {
        .app-title-content {
          left: 60px;
        }
      }
    }
  }
`;

const SearchBar = styled.div`
  /* Styles for search bar */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px auto;

  input {
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    border-radius: 20px;

    &:focus {
      outline-color: #135ddf;
    }

    &::placeholder {
      font-size: 14px;
    }
  }

  button {
    padding: 5px 10px;
    border: none;
    background-color: #135ddf;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #03aab4;
      transition: 0.5s;
    }
  }
`;

const SearchButton = styled.button`
  /* Styles for search button */
  padding: 5px 10px;
  border: none;
  background-color: #135ddf;
  color: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export default EventCard;
