# Components

Esta pasta contém os componentes do projeto. Os nomes dos arquivos devem estar no formato kebab-case.tsx.

## Estilização

Os componentes devem usar CSS modules para estilização. Os arquivos de estilo devem ser nomeados como <component-name>.module.css e importados no componente da seguinte maneira:

```tsx
import styles from "./component-name.module.css";

function ComponentName() {
  return <div className={styles.container}>{/* conteúdo do componente */}</div>;
}
```

Para usar uma classe de estilo específica, basta acessá-la como uma propriedade do objeto styles. Por exemplo:

```tsx
function ComponentName() {
  return <button className={styles.button}>Clique aqui</button>;
}
```

### Exemplo

Aqui está um exemplo de como um componente chamado my-component poderia ser definido na pasta components:

```
components/
└── my-component/
    ├── my-component.tsx
    └── my-component.module.css
```

```tsx
// my-component.tsx

import styles from "./my-component.module.css";

export function MyComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meu Componente</h1>
      <p className={styles.description}>
        Este é um exemplo de componente com CSS modules.
      </p>
    </div>
  );
}
```

```css
/* my-component.module.css */

.container {
  padding: 16px;
  background-color: #f0f0f0;
}

.title {
  font-size: 24px;
  margin-bottom: 8px;
}

.description {
  font-size: 16px;
  color: #666;
}
```
