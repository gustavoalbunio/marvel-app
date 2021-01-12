import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import api from '../../services/api';

import Loading from '../../components/Loading';

import { Container, Banner, Content, LoadingContainer, Comics } from './styles';

/**
 * nome, imagem, descrição e listagem dos principais quadrinhos que o personagem faz parte, com título e imagem,
 */

interface Character {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  description: string;
  comics: Comic[];
}

interface Comic {
  id: number;
  title: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Character: React.FC = () => {
  const history = useHistory();

  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { state } = history.location;

    const { id, name, description, thumbnail } = state as Character;

    api
      .get(`/characters/${id}/comics`)
      .then(
        ({
          data: {
            data: { results },
          },
        }) => {
          setCharacter({
            id,
            name,
            description,
            thumbnail,
            comics: results.filter(
              (r: Character) =>
                r.thumbnail.path !==
                'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
            ),
          });
          setLoading(false);
        },
      )
      .catch(() => setLoading(false));
  }, [history]);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <Banner
            img={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
          />
          <Content>
            <h1>
              {character?.name}
              <Link to="/">Voltar</Link>
            </h1>
            {character?.description && <span>{character.description}</span>}

            <h2>Quadrinhos</h2>
            {!character?.comics.length && (
              <span>Nenhum quadrinho encontrado.</span>
            )}

            <Comics>
              {character?.comics.map(comic => (
                <div key={comic.id}>
                  <span>{comic.title}</span>
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                </div>
              ))}
            </Comics>
          </Content>
        </>
      )}
    </Container>
  );
};

export default Character;
