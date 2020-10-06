import React from "react";
import { Text } from "react-native";
import { useRepositories } from "../utils/hooks";
import Repository from "./Repository";

export default function Repositories() {
  const { repositories, handleLike } = useRepositories();

  return (
    <>
      {repositories.map(({ id, likes, techs, title }) => {
        return (
          <Repository
            key={`repository-${id}`}
            id={id}
            likes={likes}
            techs={techs}
            title={title}
            handleLike={handleLike}
          />
        );
      })}
    </>
  );
}
