import React, { useState, useEffect, useCallback } from "react";
import * as RepositoryApi from "../services/api";
export const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    RepositoryApi.list()
      .then((res) => setRepositories(res.data))
      .catch(console.error);
  }, []);

  const handleLike = (id) => {
    RepositoryApi.like(id)
      .then(() => {
        setRepositories(
          repositories.map((repository) => {
            if (repository.id === id)
              return { ...repository, likes: repository.likes + 1 };
            return repository;
          })
        );
      })
      .catch(console.error);
  };

  return { repositories, handleLike };
};
