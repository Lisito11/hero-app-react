import React, { useMemo } from "react";
import queryString from "query-string";
import { HeroCard } from "./../heroes/HeroCard";
import { useForm } from "./../../hooks/useForm";
import { useLocation } from "react-router";
import { getHeroByName } from "./../selectors/getHeroByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const initialForm = {
    searchText: q,
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="searchText"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn btn-block btn-outline-primary m-1"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          {(q === "") && <div className="alert alert-info">Search a hero</div>}

          {q !== "" && heroesFiltered.lenght === 0 && (
            <div className="alert alert-danger">There is not hero with {q}</div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard className="m-1" key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
