## DEV

- **init node_module :** `npm install`
- **Run a migration :** `npx knex migrate:latest`
- **Rollback the migration :** `npx knex migrate:rollback`

## Step for docker :

```
 - docker-compose up -d
 - docker-compose run app npx knex migrate:latest
```

LINK API : `api-quizzle.azurewebsites.net` from container docker (registry container)
