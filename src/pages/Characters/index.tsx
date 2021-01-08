import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import api from '../../services/api';

import Character from '../Character';
import Loading from '../../components/Loading';

import { Container, Section, Search, Content } from './styles';

import logoMarvel from '../../assets/logo.svg';

interface CharacterProps {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  description: string;
}

const Characters: React.FC = () => {
  const history = useHistory();
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

  const [characters, setCharacter] = useState<CharacterProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nameCharacter, setNameCharacter] = useState<string>('');

  const handleGetCharacters = useCallback((search?: string) => {
    setLoading(true);
    api
      .get('/characters', {
        params: {
          ...(search && { name: search }),
        },
      })
      .then(
        ({
          data: {
            data: { results },
          },
        }) => {
          setCharacter(
            results.filter(
              (r: Character) =>
                r.thumbnail.path !==
                'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
            ),
          );
          setLoading(false);
        },
      );
  }, []);

  useEffect(() => {
    handleGetCharacters();
  }, [handleGetCharacters]);

  const handleSearchCharacter = useCallback(
    (name: string) => {
      handleGetCharacters(name);
    },
    [handleGetCharacters],
  );

  const eventKey = useCallback(
    (event: { key: string }) => {
      if (['Enter'].includes(event.key)) {
        handleSearchCharacter(nameCharacter);
      }
    },
    [handleSearchCharacter, nameCharacter],
  );

  const handleCharacter = useCallback(
    (character: CharacterProps) => {
      history.push('/character', {
        id: character.id,
        name: character.name,
        thumbnail: {
          extension: character.thumbnail.extension,
          path: character.thumbnail.path,
        },
        description: character.description,
      });
    },
    [history],
  );

  const handleClear = useCallback(() => {
    handleGetCharacters();
    setNameCharacter('');
  }, [handleGetCharacters]);

  return (
    <Container>
      <img src={logoMarvel} alt="Logo Marvel" />

      <Search>
        <input
          type="text"
          name="search"
          placeholder="Busque um personagem pelo nome."
          onChange={e => setNameCharacter(e.target.value)}
          value={nameCharacter}
          onKeyDown={eventKey}
        />
        <button type="submit" onClick={handleClear}>
          {nameCharacter && <FaTimes size={20} />}
        </button>
      </Search>

      {!loading && !characters.length && (
        <Section>Nenhum personagem encontrado. Tente outro nome.</Section>
      )}

      {loading ? (
        <Section>
          <Loading />
        </Section>
      ) : (
        <>
          <Content isMobile={isMobile}>
            {characters.map(character => (
              <button
                key={character.id}
                type="button"
                onClick={() => handleCharacter(character)}
              >
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
                <div>
                  <h2>{character.name}</h2>
                </div>
              </button>
            ))}
          </Content>
        </>
      )}
    </Container>
  );
};

export default Characters;
