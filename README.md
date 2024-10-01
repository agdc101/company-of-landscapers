# The Company of Landscapers

The Company of Landscapers is built using [Craft CMS](https://craftcms.com/) and is configured to run locally using [DDEV](https://ddev.readthedocs.io/en/stable/). Follow the steps below to get started.

## Requirements

Before starting, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/)
- [DDEV](https://ddev.readthedocs.io/en/stable/#installation)

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Configure .env file settings.

#### The application ID used to uniquely store session and cache data, mutex locks, and more
```bash
CRAFT_APP_ID=CraftCMS--205bdc36-0ae0-46bd-87b4-65202fd73466
```
#### The environment Craft is currently running in (dev, staging, production, etc.)
```bash
CRAFT_ENVIRONMENT=dev
```
#### Database connection settings
```bash
CRAFT_DB_DRIVER="mysql"
CRAFT_DB_SERVER="db"
CRAFT_DB_PORT="3306"
CRAFT_DB_DATABASE="db"
CRAFT_DB_USER="db"
CRAFT_DB_PASSWORD="db"
CRAFT_DB_SCHEMA=public
CRAFT_DB_TABLE_PREFIX=
```
#### General settings
```bash
CRAFT_SECURITY_KEY=5fe2PmdhK8yVxPnESA03vAb00VJCq71y
CRAFT_DEV_MODE=true
CRAFT_ALLOW_ADMIN_CHANGES=true
CRAFT_DISALLOW_ROBOTS=true
CRAFT_WEB_ROOT="/var/www/html/web"
PRIMARY_SITE_URL="https://company-of-landscapers.ddev.site"
MAILPIT_SMTP_HOSTNAME="127.0.0.1"
MAILPIT_SMTP_PORT="1025"
```
#### Google Cloud Storage settings
```bash
GCS_PROJECT_ID=company-of-landscapers-craft
GCS_KEY_FILE=
```

### 3. Configure DDEV
```bash
ddev config --project-type=craftcms --docroot=web
```
### 4. Scaffold the project from the official starter project:
```bash
ddev composer create -y --no-scripts "craftcms/craft"
```
### 5. Run the Craft setup wizard, and accept all defaults
```bash
ddev craft install
```

#### Read about configuration, here:
#### https://craftcms.com/docs/5.x/configure.html

#### Run ```ddev launch``` and navigate to '/admin' to view craft admin.
