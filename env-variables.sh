# Description: Create environment variables in Tinybird to use the PostgreSQL table function
source .env

echo "Starting the script to create environment variables in Tinybird...\n"

# create pg_username
echo "Creating pg_username...\n"
curl \
  -X POST "$TB_BASE_URL/v0/variables" \
  -H "Authorization: Bearer $TB_ADMIN_TOKEN" \
  -d "type=secret" \
  -d "name=pg_username" \
  -d "value=$POSTGRES_USER" \

# create pg_password
echo "\n\nCreating pg_password...\n"
curl \
  -X POST "$TB_BASE_URL/v0/variables" \
  -H "Authorization: Bearer $TB_ADMIN_TOKEN" \
  -d "type=secret" \
  -d "name=pg_password" \
  -d "value=$POSTGRES_PASSWORD" \

# get variables
echo "\n\nGetting variables...\n"
curl \
  -X GET "$TB_BASE_URL/v0/variables" \
  -H "Authorization: Bearer $TB_ADMIN_TOKEN"