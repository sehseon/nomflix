import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Imdb = styled.a`
  display: inline-block;
  width: 50px;
  height: 18px;
  line-height: 18px;
  color: black;
  background-color: #f5c518;
  font-weight: 600;
  text-align: center;
  border-radius: 6px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const VideoTitle = styled.div`
  margin-top: 16px;
  color: #e67e22;
  font-weight: 600;
  font-size: 14px;
`;
const Video = styled.span`
  display: block;
  margin-top: 10px;
`;

const VideoLink = styled.a`
  display: inline-block;
  margin-left: 10px;
  width: 50px;
  height: 14px;
  line-height: 14px;
  color: black;
  background-color: #e67e22;
  font-weight: 600;
  text-align: center;
  border-radius: 4px;
`;

const ProductTab = styled("ul")`
  display: flex;
  margin-top: 16px;
`;

const ProductItemTitle = styled("li")`
  margin-right: 20px;
  font-weight: 600;
  color: ${(props) => (props.active ? "#2ecc71" : "#fff")};
  cursor: pointer;
  &:hover {
    color: #f1c40f;
  }
`;
const ProductionItemContainer = styled.div`
  display: inline-block;
  margin-top: 10px;
`;

const Company = styled.div`
  margin: 6px;
  width: 100px;
  height: 40px;
  border: solid 0px #fff;
  background-image: url(${(props) => props.logo});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Country = styled.div`
  margin: 6px;
  width: 40px;
  height: 40px;
  border: solid 0px #fff;
  background-image: url(${(props) => props.logo});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const CreatedBy = styled.div`
  margin: 6px auto;
  width: 100px;
  height: 80px;
  border: solid 0px #fff;
  background-image: url(${(props) => props.logo});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const CreatedByName = styled.div`
  padding: 5px 5px;
  text-align: center;
`;

const Season = styled.div`
  margin: 6px;
  width: 80px;
  height: 80px;
  border: solid 0px #fff;
  background-image: url(${(props) => props.logo});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const SeasonName = styled.div`
  padding: 5px 5px;
  text-align: center;
`;

const SeasonAirDate = styled.div`
  padding: 5px 5px;
  text-align: center;
`;

const DetailPresenter = ({ result, isMovie, error, loading }) => {
  const [selectedTab, setSelectedTab] = useState("company");

  const changeTab = (tab) => {
    setSelectedTab(tab);
  };
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      {error ? (
        <Message color="#e74c3c" text={error} />
      ) : (
        <>
          {/* {console.log(result.imdb_id)} */}
          {/* {console.log(result)} */}
          <Helmet>
            <title>
              {result.original_title
                ? result.original_title
                : result.original_name}{" "}
              | Nomflix
            </title>
          </Helmet>
          {result.backdrop_path && <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
          ></Backdrop>}
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                  : require("../../assets/noPosterSmall.png")
              }
            />
            <Data>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>∙</Divider>
                <Item>
                  {result.runtime ? result.runtime : result.episode_run_time}{" "}
                  min
                </Item>
                <Divider>∙</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
                <Divider>{""}</Divider>
                <Item>
                  {result.imdb_id && (
                    <Imdb
                      href={`https://www.imdb.com/title/${result.imdb_id}`}
                      target={"_blank"}
                    >
                      IMDb
                    </Imdb>
                  )}
                </Item>
              </ItemContainer>
              <Overview>{result.overview}</Overview>
              <VideoTitle>Videos</VideoTitle>
              {result.videos.results &&
                result.videos.results.map((video) => (
                  <Video key={video.id}>
                    {video.name}
                    {video.site.toLowerCase() === "youtube" && (
                      <VideoLink
                        href={`https://youtube.com/watch?v=${video.key}`}
                        target={"_blank"}
                      >
                        watch
                      </VideoLink>
                    )}
                  </Video>
                ))}
              <ProductTab>
                <ProductItemTitle
                  onClick={() => changeTab("company")}
                  active={selectedTab === "company"}
                >
                  Production Companies
                </ProductItemTitle>
                {isMovie && <ProductItemTitle
                  onClick={() => changeTab("country")}
                  active={selectedTab === "country"}
                >
                  Production Countries
                </ProductItemTitle>}
                {!isMovie && <ProductItemTitle
                  onClick={() => changeTab("createdby")}
                  active={selectedTab === "createdby"}
                >
                  Created By
                </ProductItemTitle>}
                {!isMovie && <ProductItemTitle
                  onClick={() => changeTab("season")}
                  active={selectedTab === "season"}
                >
                  Seasons
                </ProductItemTitle>}
              </ProductTab>
              {selectedTab === "company" &&
                result.production_companies &&
                result.production_companies.map((company) => (
                  <ProductionItemContainer key={company.id}>
                    {company.logo_path && (
                      <Company
                        logo={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                      />
                    )}
                  </ProductionItemContainer>
                ))}
              {isMovie && selectedTab === "country" &&
                result.production_countries &&
                result.production_countries.map((country, index) => (
                  <ProductionItemContainer key={index + Date.now()}>
                    {
                      <Country
                        logo={`https://www.countryflags.io/${country.iso_3166_1}/shiny/64.png`}
                      />
                    }
                  </ProductionItemContainer>
                ))}
              {!isMovie && selectedTab === "createdby" &&
                result.created_by &&
                result.created_by.map((cre, index) => (
                  <ProductionItemContainer key={cre.credit_id}>
                    {cre.profile_path && (
                      <>
                      <CreatedBy
                        logo={`https://image.tmdb.org/t/p/original/${cre.profile_path}`}
                      >
                      </CreatedBy>
                      <CreatedByName>{cre.name}</CreatedByName>
                      </>
                    )}
                  </ProductionItemContainer>
                ))}
              {!isMovie && selectedTab === "season" &&
                result.seasons &&
                result.seasons.map((season, index) => (
                  <ProductionItemContainer key={season.id}>
                    {season.poster_path && (
                      <>
                      <Season
                        logo={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                      />
                      <SeasonName>{season.name}</SeasonName>
                      <SeasonAirDate>{season.air_date}</SeasonAirDate>
                      </>
                    )}
                  </ProductionItemContainer>
                ))}
            </Data>
          </Content>
        </>
      )}
    </Container>
  );
};
DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
