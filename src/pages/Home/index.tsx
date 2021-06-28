import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoimg from '../../assets/gato.png';

import { Title, Img, Form, Repository, Error } from './styles';

interface Repositories {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setinputError] = useState('');
  const [repositories, setRepositories] = useState<Repositories[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubRepository');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubRepository', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setinputError('Digite o nome do autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repositories>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setinputError('');
    } catch (err) {
      setinputError('Repositório não encontrado.');
    }
  }

  return (
    <>
      <Img src={logoimg} />
      <Title>Explore repositórios no Github</Title>

      {inputError && <Error>{inputError}</Error>}

      <Form hasError={!!inputError} onSubmit={handleAddRepository} action="">
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório."
        />

        <button type="submit">Pesquisar</button>
      </Form>

      <Repository>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={30} />
          </Link>
        ))}
      </Repository>
    </>
  );
};
export default Dashboard;
