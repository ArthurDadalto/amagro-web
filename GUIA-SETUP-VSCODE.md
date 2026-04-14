# AMAGRO — Guia de Setup Completo (VS Code)

## Pré-requisitos

Antes de começar, instale se ainda não tiver:

```
✅ Node.js 20+ → https://nodejs.org
✅ PHP 8.2+    → https://www.php.net/downloads
✅ Composer    → https://getcomposer.org
✅ PostgreSQL  → https://www.postgresql.org/download/
✅ Git         → https://git-scm.com
✅ VS Code     → https://code.visualstudio.com
```

Extensões recomendadas no VS Code:
- PHP Intelephense
- Laravel Blade Snippets
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- PostCSS Language Support
- GitLens

---

## PASSO 1 — Criar a estrutura de pastas

Abra o terminal e rode:

```bash
# Crie a pasta raiz do projeto
mkdir amagro
cd amagro

# Inicialize o git
git init

# Crie as branches
git checkout -b main
git checkout -b develop
```

---

## PASSO 2 — Criar o backend Laravel

```bash
# Dentro da pasta amagro/
composer create-project laravel/laravel backend
cd backend

# Instalar dependências do AMAGRO
composer require laravel/sanctum
composer require simplesoftwareio/simple-qrcode
```

Agora **copie os arquivos que eu entreguei** para dentro de `backend/`.
A estrutura final deve ficar assim:

```
amagro/
└── backend/                          ← Laravel 11
    ├── app/
    │   ├── Enums/
    │   │   ├── FarmRole.php          ← COPIAR
    │   │   ├── LotStatus.php         ← COPIAR
    │   │   ├── Plan.php              ← COPIAR
    │   │   ├── Process.php           ← COPIAR
    │   │   └── Species.php           ← COPIAR
    │   │
    │   ├── Http/
    │   │   ├── Controllers/
    │   │   │   ├── Api/V1/
    │   │   │   │   ├── AuthController.php        ← COPIAR
    │   │   │   │   ├── DashboardController.php   ← COPIAR
    │   │   │   │   ├── ExpenseController.php     ← COPIAR
    │   │   │   │   ├── FarmController.php        ← COPIAR
    │   │   │   │   ├── HarvestController.php     ← COPIAR
    │   │   │   │   ├── InventoryController.php   ← COPIAR
    │   │   │   │   ├── IrrigationController.php  ← COPIAR
    │   │   │   │   ├── LotController.php         ← COPIAR
    │   │   │   │   ├── PlotController.php        ← COPIAR
    │   │   │   │   └── SoilAnalysisController.php ← COPIAR
    │   │   │   │
    │   │   │   └── PublicLotController.php       ← COPIAR
    │   │   │
    │   │   ├── Middleware/
    │   │   │   ├── EnsureFarmAccess.php          ← COPIAR
    │   │   │   ├── SecurityHeaders.php           ← COPIAR
    │   │   │   └── VerifyRecaptcha.php           ← COPIAR
    │   │   │
    │   │   ├── Requests/
    │   │   │   └── StoreLotRequest.php           ← COPIAR
    │   │   │
    │   │   └── Resources/
    │   │       └── LotResource.php               ← COPIAR
    │   │
    │   ├── Jobs/
    │   │   └── GenerateQrCode.php                ← COPIAR
    │   │
    │   ├── Models/
    │   │   ├── Expense.php                       ← COPIAR
    │   │   ├── ExpenseCategory.php               ← COPIAR
    │   │   ├── Farm.php                          ← COPIAR
    │   │   ├── Harvest.php                       ← COPIAR
    │   │   ├── InventoryItem.php                 ← COPIAR
    │   │   ├── InventoryMovement.php             ← COPIAR
    │   │   ├── Lot.php                           ← COPIAR
    │   │   ├── Plot.php                          ← COPIAR
    │   │   ├── SoilAnalysis.php                  ← COPIAR
    │   │   └── User.php                          ← SUBSTITUIR o existente
    │   │
    │   ├── Scopes/
    │   │   └── FarmScope.php                     ← COPIAR (criar pasta)
    │   │
    │   └── Services/
    │       └── LotService.php                    ← COPIAR (criar pasta)
    │
    ├── bootstrap/
    │   └── app.php                               ← SUBSTITUIR o existente
    │
    ├── database/
    │   ├── migrations/
    │   │   ├── 0001_01_01_000000_create_users_table.php      ← SUBSTITUIR
    │   │   ├── 0001_01_01_000001_create_farms_table.php      ← COPIAR
    │   │   ├── 0001_01_01_000002_create_farm_user_table.php  ← COPIAR
    │   │   ├── 0001_01_01_000003_create_plots_table.php      ← COPIAR
    │   │   ├── 0001_01_01_000004_create_expenses_tables.php  ← COPIAR
    │   │   ├── 0001_01_01_000005_create_harvests_table.php   ← COPIAR
    │   │   ├── 0001_01_01_000006_create_inventory_tables.php ← COPIAR
    │   │   ├── 0001_01_01_000007_create_soil_analyses_table.php ← COPIAR
    │   │   ├── 0001_01_01_000008_create_lots_table.php       ← COPIAR
    │   │   └── 0001_01_01_000009_create_support_tables.php   ← COPIAR
    │   │
    │   └── seeders/
    │       └── ExpenseCategorySeeder.php          ← COPIAR
    │
    ├── resources/views/
    │   └── lots/
    │       └── show.blade.php                    ← COPIAR (criar pasta lots/)
    │
    ├── routes/
    │   ├── api.php                               ← SUBSTITUIR o existente
    │   └── web.php                               ← SUBSTITUIR o existente
    │
    └── .env                                      ← EDITAR (ver passo 3)
```

### Comandos para criar as pastas que não existem no Laravel padrão:

```bash
# Dentro de backend/
mkdir -p app/Enums
mkdir -p app/Http/Controllers/Api/V1
mkdir -p app/Http/Requests
mkdir -p app/Http/Resources
mkdir -p app/Jobs
mkdir -p app/Scopes
mkdir -p app/Services
mkdir -p resources/views/lots
```

### Atenção — arquivos para SUBSTITUIR (já existem no Laravel):

| Arquivo | Ação |
|---------|------|
| `app/Models/User.php` | **Substituir** pelo nosso (tem campos de plano/trial) |
| `bootstrap/app.php` | **Substituir** pelo nosso (tem middlewares e rate limiters) |
| `routes/api.php` | **Substituir** pelo nosso (todas as rotas AMAGRO) |
| `routes/web.php` | **Substituir** pelo nosso (rota pública /lote/{hash}) |
| `database/migrations/...users_table.php` | **Substituir** (tem campos extras) |

Todos os outros são arquivos NOVOS — só copiar para a pasta certa.

---

## PASSO 3 — Configurar o .env do backend

Abra `backend/.env` e altere:

```env
APP_NAME=AMAGRO
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:5173

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=amagro
DB_USERNAME=postgres
DB_PASSWORD=SUA_SENHA_AQUI

SANCTUM_STATEFUL_DOMAINS=localhost:5173,localhost
SESSION_DOMAIN=localhost
SESSION_DRIVER=database

CACHE_STORE=file
QUEUE_CONNECTION=database
```

---

## PASSO 4 — Criar o banco e rodar migrations

```bash
# Criar o banco no PostgreSQL (via terminal ou pgAdmin)
createdb amagro

# Dentro de backend/
php artisan migrate
php artisan db:seed --class=ExpenseCategorySeeder

# Verificar se tudo rodou
php artisan migrate:status
```

Deve mostrar 10 migrations como "Ran".

---

## PASSO 5 — Configurar CORS e Sanctum

Editar `backend/config/cors.php`:

```php
'supports_credentials' => true,
'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:5173')],
```

Editar `backend/config/sanctum.php`:

```php
'stateful' => explode(',', env(
    'SANCTUM_STATEFUL_DOMAINS',
    'localhost,localhost:5173'
)),
```

---

## PASSO 6 — Testar o backend

```bash
cd backend
php artisan serve
```

Testar no navegador ou Postman:
- `GET http://localhost:8000/health` → deve retornar `{"status":"ok"}`
- `POST http://localhost:8000/api/v1/register` com body JSON:
  ```json
  {
    "name": "Arthur Miguel",
    "email": "arthur@amagro.com.br",
    "password": "senha1234",
    "password_confirmation": "senha1234"
  }
  ```
  → deve retornar token + user

---

## PASSO 7 — Criar o frontend

```bash
# Voltar para a pasta raiz amagro/
cd ..

# Copiar toda a pasta amagro-frontend que eu entreguei e renomear
# (ou criar do zero e copiar arquivo por arquivo)
mv amagro-frontend frontend
cd frontend

# Instalar dependências
npm install

# Rodar
npm run dev
```

A estrutura do frontend:

```
amagro/
└── frontend/                         ← React + Vite
    ├── index.html                    ← COPIAR
    ├── package.json                  ← COPIAR
    ├── vite.config.js                ← COPIAR
    ├── tailwind.config.js            ← COPIAR
    ├── postcss.config.js             ← COPIAR
    ├── public/
    │   └── favicon.svg
    └── src/
        ├── App.jsx                   ← COPIAR
        ├── main.jsx                  ← COPIAR
        ├── index.css                 ← COPIAR
        ├── api/
        │   └── client.js             ← COPIAR
        ├── components/
        │   ├── layout/
        │   │   ├── DashboardLayout.jsx ← COPIAR
        │   │   ├── Sidebar.jsx       ← COPIAR
        │   │   ├── Topbar.jsx        ← COPIAR
        │   │   └── BottomNav.jsx     ← COPIAR
        │   └── shared/
        │       └── SpeciesToggle.jsx ← COPIAR
        ├── features/
        │   └── dashboard/
        │       └── DashboardPage.jsx ← COPIAR
        ├── lib/
        │   └── utils.js             ← COPIAR
        ├── pages/
        │   ├── LandingPage.jsx      ← COPIAR
        │   ├── LoginPage.jsx        ← COPIAR
        │   └── RegisterPage.jsx     ← COPIAR
        └── stores/
            ├── authStore.js         ← COPIAR
            └── themeStore.js        ← COPIAR
```

---

## PASSO 8 — Testar tudo junto

Terminal 1 (backend):
```bash
cd amagro/backend
php artisan serve
# → http://localhost:8000
```

Terminal 2 (frontend):
```bash
cd amagro/frontend
npm run dev
# → http://localhost:5173
```

Abrir `http://localhost:5173` no navegador:
- Landing page deve carregar com a identidade B (verde escuro + dourado)
- Clicar "Entrar" → página de login
- Clicar "Teste grátis" → página de registro
- Acessar `/dashboard` → dashboard com sidebar, KPIs, cotação

---

## PASSO 9 — Primeiro commit no GitHub

```bash
cd amagro

# Criar .gitignore na raiz
cat > .gitignore << 'EOF'
# Dependencies
frontend/node_modules/
backend/vendor/

# Environment
backend/.env
frontend/.env

# Build
frontend/dist/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
EOF

git add .
git commit -m "feat: AMAGRO MVP - backend Laravel 11 + frontend React (Direction B)"
git remote add origin https://github.com/ArthurDadalto/amagro-web.git
git push -u origin develop
```

---

## Estrutura final no VS Code

```
📁 amagro/                    ← Abrir ESTA pasta no VS Code
├── 📁 backend/               ← Laravel 11 (API)
│   ├── 📁 app/
│   ├── 📁 bootstrap/
│   ├── 📁 config/
│   ├── 📁 database/
│   ├── 📁 resources/
│   ├── 📁 routes/
│   ├── .env
│   └── composer.json
│
├── 📁 frontend/              ← React + Vite
│   ├── 📁 src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── 📁 docs/                  ← Documentação (opcional)
│   ├── database-architecture.md
│   ├── api-endpoints.md
│   ├── security-audit.md
│   └── ...
│
├── .gitignore
└── README.md
```

**Dica VS Code:** Abra a pasta `amagro/` (a raiz) no VS Code.
Assim você vê backend e frontend lado a lado no Explorer.

---

## Resumo dos comandos (copie e cole)

```bash
# 1. Criar tudo
mkdir amagro && cd amagro
composer create-project laravel/laravel backend
cd backend
composer require laravel/sanctum simplesoftwareio/simple-qrcode
mkdir -p app/{Enums,Http/Controllers/Api/V1,Http/Requests,Http/Resources,Jobs,Scopes,Services}
mkdir -p resources/views/lots

# 2. Copiar arquivos entregues para as pastas certas (ver mapa acima)

# 3. Configurar .env, cors.php, sanctum.php

# 4. Banco
createdb amagro
php artisan migrate
php artisan db:seed --class=ExpenseCategorySeeder

# 5. Frontend
cd .. 
# (copiar pasta amagro-frontend como frontend/)
cd frontend && npm install

# 6. Rodar
# Terminal 1: cd backend && php artisan serve
# Terminal 2: cd frontend && npm run dev
# Abrir http://localhost:5173
```
