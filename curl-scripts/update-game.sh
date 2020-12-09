curl --include --request PATCH "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-type: application/json" \
--data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": "'"${FALSE}"'"
  }
}'
