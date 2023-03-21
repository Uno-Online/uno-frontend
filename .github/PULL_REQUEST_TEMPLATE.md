## Atenção!

Se o seu PR fizer uma alteração que deva ser incluída nos changelogs, (praticamente qualquer mudança que adicione ou altere a funcionalidade do código) gere um conjunto de alterações executando `yarn changeset` e seguindo os prompts. Conjuntos de alterações que adicionam recursos devem ser `minor` (aumentarão a versão minor 0.x.0) e aqueles que corrigem bugs devem ser `patch` (aumentarão a versão patch 0.0.x).

Sanity check:

- [ ] Meu código altera funcionalidades existentes ou adiciona novas funcionalidades, por isso adicionei um novo changeset.
