import { parseISO, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

const serializeRepositories = (repositiores) =>
  repositiores.map((repo) => {
    const updatedDistance = formatDistance(
      parseISO(repo.updated_at),
      new Date(),
      {
        addSuffix: true,
        locale: ptBR,
      }
    );
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      updatedAt: repo.updated_at,
      repoUrl: repo.svn_url,
      updatedDistance,
    };
  });

const serializeUserData = (userData) => {
  const createDistance = formatDistance(
    parseISO(userData.created_at),
    new Date(),
    {
      addSuffix: true,
      locale: ptBR,
    }
  );
  return {
    avatarUrl: userData.avatar_url,
    name: userData.name,
    description: userData.bio,
    userName: userData.login,
    publicReposCount: userData.public_repos,
    followersCount: userData.followers,
    createdAt: userData.created_at,
    createDistance,
  };
};

export default {
  serializeUserData,
  serializeRepositories,
};
