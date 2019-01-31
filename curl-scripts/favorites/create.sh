curl "http://localhost:4741/favorites" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "favorite": {
      "user_id": "'"${USER_ID}"'",
      "font_id": "'"${FONT_ID}"'",
      "project": "'"${PROJECT}"'"
    }
  }'

echo
