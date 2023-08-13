TOKEN=$(curl -X POST \
    --silent \
    --data '{ "user": "devolda",  "password": "123"}' \
    http://localhost:3000/login | sed -n 's/.*"token":"\([^"]*\).*/\1/p'
)

echo "Token captured: $TOKEN"
echo

RESULT=$(curl -X GET \
    --silent \
    --header "Authorization: Bearer $TOKEN" \
    http://localhost:3000/
)

echo "Private route response: $RESULT"